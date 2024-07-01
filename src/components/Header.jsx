import { useState } from "react";
import { Link } from "react-router-dom";
import icon from "/favicon.svg"
export const Header = () => {

  return (
    <>
      <section className="flex h-24 w-full items-center justify-between px-10 bg-[#f5f5f5]">
        <h1 className="text-2xl flex justify-center items-center font-bold text-[#ED4523] pl-5">
          <img src={icon} alt="icon" className="pr-2" />
          Pedilo
        </h1>
        <Link
                to={"/Login"}
                className="me-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                <h2 className="text-center">Ingresar</h2>
              </Link>
      </section>
    </>
  );
};
