import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Routes/Home";
import { Cart } from "./Routes/Cart";
import { Login } from "./Routes/Login";
import { AuthProvider, AuthContext } from './contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = React.useContext(AuthContext);
  return user ? children : <Navigate to="/" />;
};

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NextUIProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Login></Login>}></Route>
              <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} ></Route>
              <Route path="/" element={<Navigate to="/" />} />
              <Route path="/cart" element={<Cart></Cart>} ></Route>
            </Routes>
          </AuthProvider>
        </NextUIProvider>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
