import { Cards } from "../components/Cards";
import { Navbar } from "../components/Navbar";
import { Header } from "./../components/Header";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <main className="h-[900px] bg-purple-100 px-10 py-5 dark:bg-gray-800">
        <Cards></Cards>
        <Navbar></Navbar>
      </main>
    </>
  );
};
