import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { CartContext } from "../contexts/ShoppingCartContext";
export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
console.log(cart);
  return (
    <>
      <div className="border-b-2 pb-3">
        <Link to={"/"} className="absolute pl-4 pt-6">
          <span>
            <FaAngleLeft />
          </span>
        </Link>
        <h1 className="pt-4 text-center text-xl">Tu Pedido</h1>
      </div>
      <div>
        {cart.map((product) => {
          return (
            <div key={product.id}>
                <span>{product.nombre}</span>
                <span>{product.id}</span>;
                <span>{product.price}</span>;
            </div>
            )
        })}
      </div>
    </>
  );
};
