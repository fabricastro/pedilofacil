import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { CartContext } from "../contexts/ShoppingCartContext";

export function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vSFJglE4Bfma7jTFTcmX5VoNB7nNBJr-s-9cAEjaa8aCmAPBijOqZuHXdRBbBIlXHTpm0EL2jQNTvax/pub?output=csv",
        );
        const csv = await response.text();

        const parsedProducts = csv
          .split("\n")
          .slice(1)
          .map((row) => {
            const [id, nombre, imagen, precio, cat] = row.split(",");
            return { id, nombre, imagen, precio: Number(precio), cat };
          });

        setProducts(parsedProducts);
        console.log(parsedProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const [cart, setCart, addToCart, removeItem, getQuantityById] = useContext(CartContext);


  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <Card
          className="cursor-default flex-row h-[130px] items-center"
          shadow="sm"
          key={index}
        >
          <CardBody className="overflow-visible w-[35%]">
            {getQuantityById(product.id) > 0 &&
              <>
                <span className="absolute right-3 top-3 z-50 rounded-full bg-white px-2">
                  {getQuantityById(product.id)}
                </span>
                <button className="absolute z-50 left-3 top-3 border-1 border-black rounded-md" onClick={() => removeItem(product.id, product.price)}>
                  <FaMinus
                    className="text-xl bg-white rounded-md p-1"
                  />
                </button>
                <button className="absolute z-50 left-9 top-3 border-1 border-black rounded-md"
                  onClick={() => {
                    addToCart(product.id, product.precio);
                  }}>
                  <FaPlus
                    className="text-xl bg-white rounded-md p-1 "
                  />
                </button>
              </>
            }
            <Image
              radius="lg"
              alt="producto"
              className="h-[80px] w-[80px] object-cover"
              src={product.imagen}
            />
          </CardBody>
          <CardFooter className="justify-between text-small w-[65%]">
            <div>

              <b>{product.nombre}</b>
              <div className="pt-5 flex gap-6">
              <p className="text-default-500">${product.precio}</p>
                <button>
                  <FaShoppingCart
                    onClick={() => {
                      addToCart(product.id, product.precio, product.nombre);
                    }}
                  />
                </button>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
    
  );
}
