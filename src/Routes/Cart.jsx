import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Navbar } from "./../components/Navbar";
import { Divider, Input } from "@nextui-org/react";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const [customerName, setCustomerName] = useState("");

  // Calcula el total de un producto específico
  const calculateProductTotal = (quantity, price) => {
    return quantity * price;
  };

  // Calcula el total general de todos los productos en el carrito
  const calculateCartTotal = (cart) => {
    return cart.reduce((total, product) => {
      return total + calculateProductTotal(product.quantity, product.price);
    }, 0);
  };
 
  //Funcion para la ubicacion

  const handleShareLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCustomerLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error al obtener la direccion:", error.message);
      }
    );
  };

  return (
    <>
      <Navbar customName={customerName}></Navbar>
      {/* Header */}
      <div className="border-b-2 pb-3">
        <Link to={"/"} className="absolute pl-4 pt-6">
          <span>
            <FaAngleLeft />
          </span>
        </Link>
        <h1 className="pt-4 text-center text-xl">Tu Pedido</h1>
      </div>

      {/* Lista de Productos */}
      <div className="mt-4 px-3">
        {cart.map((product) => {
          return (
            <div
              className="flex flex-col bg-white p-2 "
              key={product.id}
            >
              <div className="flex justify-between">
                <span>
                  {product.nombre} x{product.quantity}
                </span>
                <span className="font-semibold">
                  ${calculateProductTotal(product.quantity, product.price)}
                </span>
              </div>
              <Divider orientation="horizontal" className="mt-3" />
            </div>
          );
        })}
        <div className="mb-2">
            
            <Input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              label="Ingrese su nombre"
            />
          </div>
      </div>
    </>
  );
};
