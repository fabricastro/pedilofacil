import { NextUIProvider } from "@nextui-org/react";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Cart } from "./Routes/Cart";
import { Login } from "./Routes/Login";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NextUIProvider>
        <Routes>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/" element={<Home></Home>} ></Route>
          <Route path="/Carrito" element={<Cart></Cart>} ></Route>
        </Routes>
        </NextUIProvider>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
