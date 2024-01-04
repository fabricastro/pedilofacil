import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Link } from "react-router-dom";
import { BsCartXFill } from "react-icons/bs";

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <div className="fixed bottom-0 left-1/2 z-50 flex h-16 w-full -translate-x-1/2 items-center  justify-center  border border-gray-200 bg-white text-center md:max-w-none">
      {quantity > 0 ? (
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
        <span className="flex gap-2 items-center justify-center">
          No hay productos agregados <BsCartXFill />
        </span>
      )}
    </div>
  );
};
