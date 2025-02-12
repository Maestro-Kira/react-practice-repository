import { useState } from "react";

const ShoppingList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [itemName, setName] = useState("");
  const [itemQuantity, setQuantity] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    if (!itemName || !itemQuantity) return;
    const newItem = {
      itemName,
      itemQuantity: Number(itemQuantity),
    };

    setCartItems((previousItems) => {
      return [...previousItems, newItem];
    });
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>SHOPPING LIST</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="itemName">Item Name</label>
        <br />
        <input
          type="text"
          name="itemName"
          id="itemName"
          value={itemName}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <label htmlFor="itemQuantity">Item Quantity</label>
        <br />
        <input
          type="text"
          name="itemQuantity"
          id="itemQuantity"
          value={itemQuantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Go</button>
      </form>

      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            Item name {item.itemName}. Quantity: {item.itemQuantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
