import React, { useState } from 'react';
import { calculateTotal } from './checkout';

const App = () => {
  const [items, setItems] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);

  const handleAddItem = (item: string) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    setTotal(calculateTotal(updatedItems));
  };

  return (
    <div>
      <h1>Checkout System</h1>
      <div>
        <button onClick={() => handleAddItem('A')}>Add Apple (A)</button>
        <button onClick={() => handleAddItem('B')}>Add Banana (B)</button>
        <button onClick={() => handleAddItem('C')}>Add Cherry (C)</button>
        <button onClick={() => handleAddItem('D')}>Add Date (D)</button>
      </div>
      <h2>Total: £{total.toFixed(2)}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;