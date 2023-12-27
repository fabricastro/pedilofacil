import { Header } from "./components/Header";
import { Main } from "./components/Main";
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <>
    <NextUIProvider>
      <Header></Header>
      <Main></Main>
    </NextUIProvider>
    </>
  );
}

export default App;
