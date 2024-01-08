import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Navbar } from "./../components/Navbar";
import { Divider, Input } from "@nextui-org/react";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const [customerName, setCustomerName] = useState("");
  const [customerLocation, setCustomerLocation] = useState(null);

  const [buttonColor, setButtonColor] = useState("bg-yellow-400");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showNameAlertName, setShowNameAlertName] = useState(false);
  const [showNameAlertUbi, setShowNameAlertUbi] = useState(false);


  const handleInput = (inputValue) => {
    if (/^[a-zA-Z\s]*$/.test(inputValue)) {
      setCustomerName(inputValue);
    }
  };

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
        setButtonDisabled(true);
        setButtonColor("bg-green-400");
      },
      (error) => {
        console.error("Error getting location:", error.message);
      },
    );
  };

  return (
    <>
      <Navbar
        customName={customerName}
        customerLocation={customerLocation}
        setShowNameAlertName={setShowNameAlertName}
        setShowNameAlertUbi={setShowNameAlertUbi}
      ></Navbar>
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
            <div className="flex flex-col bg-white p-2 " key={product.id}>
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
        <div className="mx-3 my-2 flex flex-col gap-4">
          <h5>Datos de envío</h5>
          <Input
            color="primary"
            type="text"
            required
            pattern="[a-zA-Z\s]+"
            value={customerName}
            onChange={(e) => handleInput(e.target.value)}
            label="*Ingrese su nombre"
            title="Por favor, ingrese un nombre válido (solo letras y espacios)"
          />
          {showNameAlertName && (
            <p className="text-sm text-red-500">
              Por favor, ingrese un nombre válido.
            </p>
          )}
          <button
            className={`rounded-lg ${buttonColor} px-5 py-2 text-sm font-medium text-white`}
            onClick={handleShareLocation}
            disabled={buttonDisabled}
          >
            Compartir ubicación
          </button>
          {showNameAlertUbi && (
            <p className="text-sm text-red-500">
              Por favor, comparta la ubicación.
            </p>
          )}
        </div>
      </div>
    </>
  );
};
