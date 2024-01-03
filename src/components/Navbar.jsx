export const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-1/2 z-50 h-16 w-full max-w-lg -translate-x-1/2 border border-gray-200  bg-white dark:border-gray-600 dark:bg-gray-700 md:max-w-none">
      <div className="mx-auto grid items-center h-full max-w-lg grid-cols-2">
        <div className="text-center">
        <h1>Productos:</h1>
        </div>
        
        <button
          type="button"
          className="me-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Ver Carrito
        </button>
      </div>
    </div>
  );
};
