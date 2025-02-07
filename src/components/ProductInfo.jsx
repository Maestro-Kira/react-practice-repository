function ProductInfo() {
  const product = {
    name: "Laptop",
    price: "$1200",
    availability: "In stock",
  };

  return (
    <div>
      <h1>Product</h1>
      <div>
        <ul>
          {Object.entries(product).map(([key, value]) => (
            <li key={key}>
              <strong>{key}: </strong>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductInfo;
