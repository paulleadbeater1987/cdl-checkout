import React, { useState } from "react";
import { calculateTotal } from "./checkout";

const App: React.FC = () => {
  const [cart, setCart] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);

  const addItem = (item: string) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    setTotal(calculateTotal(updatedCart));
  };

  return (
    <div>
      <h1>Checkout System</h1>
      <div>
        <button onClick={() => addItem("A")}>Add Item A</button>
        <button onClick={() => addItem("B")}>Add Item B</button>
        <button onClick={() => addItem("C")}>Add Item C</button>
        <button onClick={() => addItem("D")}>Add Item D</button>
      </div>
      <div>
        <h2>Cart: {cart.join(", ")}</h2>
        <h2>Total: £{total.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default App;