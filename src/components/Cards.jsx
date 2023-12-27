import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { useEffect, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

export function Cards() {

  const [products, setProducts] = useState([]);

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

return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-4">
      {products.map((product, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
            <button>
            <FaShoppingCart />
            </button>
            <p className="text-default-500">${product.precio}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
