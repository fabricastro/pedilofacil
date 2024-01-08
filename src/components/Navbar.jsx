import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Link, useLocation } from "react-router-dom";
import { BsCartXFill } from "react-icons/bs";

export const Navbar = ({ customName, customerLocation, setShowNameAlertName, setShowNameAlertUbi }) => {
  const [cart, setCart] = useContext(CartContext);
  const location = useLocation();

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  // Calcula el precio total del carrito
  const totalCartPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const handleWhatsapp = () => {
    if (!customName || !customerLocation) {
      setShowNameAlertName(!customName);
      setShowNameAlertUbi(!customerLocation);
      return;
    }
  

    const message = `Hola, me gustaría realizar un pedido. Cliente: ${customName}. Ubicación: ${
      customerLocation ? `https://www.google.com/maps?q=${customerLocation.latitude},${customerLocation.longitude}\n` : "No proporcionada"
     }. Productos: ${cart.map(
        (product) =>
          `${product.nombre} x${product.quantity} - $${(
            product.price * product.quantity
          ).toFixed(2)}\n`,
      )
      .join("")}| Total: $${totalCartPrice.toFixed(2)}`;

    window.open(
      `https://wa.me/5492646270803/?text=${encodeURIComponent(message)}`, 
    );
  };

  

  return (
    <div className="fixed bottom-0 left-1/2 z-50 flex h-20 w-full -translate-x-1/2 items-center  justify-center  border border-gray-200 bg-white text-center md:max-w-none">
      {location.pathname === "/" ? (
        quantity > 0 ? (
          <>
            <div className="mx-auto grid h-full max-w-lg grid-cols-2 items-center">
              <div className="text-center">
                <h1>Productos: {quantity}</h1>
              </div>
              <Link
                to={"/Carrito"}
                className="me-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                <h2 className="text-center">Ver Carrito</h2>
              </Link>
            </div>
          </>
        ) : (
          <span className="flex items-center justify-center gap-2">
            No hay productos agregados <BsCartXFill />
          </span>
        )
      ) : (
        // Contenido específico para la página del carrito
        <div className="">
          <p className="pb-2 font-bold">
            {" "}
            Total: ${totalCartPrice.toFixed(2)}{" "}
          </p>
          <button
            className=" me-2 rounded-lg bg-red-700 px-5 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={handleWhatsapp}
          >
            Realizar pedido
          </button>
          
        </div>
      )}
    </div>
  );
};
