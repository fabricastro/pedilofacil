import { useState } from "react";
import { handleTheme } from "../../functions/handleTheme";
export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDark = () => {
    setDarkMode(!darkMode);
    handleTheme();
  };
  return (
    <>
      <section className="flex h-32 w-full items-center justify-between bg-blue-600 px-10 dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-purple-900 dark:text-purple-200">
          Título
        </h1>
        <button
          onClick={handleDark}
          className="flex h-5 w-10 items-center justify-center rounded-full bg-gray-900 p-5 text-xs font-semibold text-purple-200 hover:bg-gray-950 hover:text-purple-100 dark:bg-purple-200 dark:text-gray-800"
        >
          {darkMode ? "Ligth" : "Dark"}
        </button>
      </section>
    </>
  );
};
