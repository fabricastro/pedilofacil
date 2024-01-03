import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { useContext, useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../contexts/ShoppingCartContext";

export function Cards() {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSFJglE4Bfma7jTFTcmX5VoNB7nNBJr-s-9cAEjaa8aCmAPBijOqZuHXdRBbBIlXHTpm0EL2jQNTvax/pub?output=csv');
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
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if(isItemsFound)
      return currItems.map((item) => {
    if(item.id === id){
      return{...item, quantity: item.quantity + 1};
    } else {
      return [...currItems, {id, quantity: 1, precio}]
    }
  })
    })
  }
return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-4">
      {products.map((product, index) => (
        <Card className="cursor-default" shadow="sm" key={index}  onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt=""
              className="w-full object-cover h-[140px]"
              src={product.imagen}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{product.nombre}</b>
            <p className="text-default-500">${product.precio}</p>
            <button>
            <FaShoppingCart onClick={() => addToCart()} />
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

