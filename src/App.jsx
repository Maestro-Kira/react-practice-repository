const Cart = () => {
  const cart = ["Apples", "Oranges", "Tomatoes"];
  return (
    <div>
      <h1>CART 🛒</h1>

      {cart.length > 0 && <h2>You have {cart.length} items in your cart</h2>}

      <ul>
        <h4>Products</h4>
        {cart.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div>
      <Cart />
    </div>
  );
}

export default App;
