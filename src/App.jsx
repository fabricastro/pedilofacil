import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { NextUIProvider } from "@nextui-org/react";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NextUIProvider>
          <Header></Header>
          <Main></Main>
        </NextUIProvider>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
