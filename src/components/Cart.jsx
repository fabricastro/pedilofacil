export const Cart = ({ cartItems }) => {
    return (
      <div className="fixed bottom-0 w-full bg-gray-900 p-4 text-white">
        <h2>Carrito</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.nombre} - ${item.precio}
            </li>
          ))}
        </ul>
      </div>
    );
  };