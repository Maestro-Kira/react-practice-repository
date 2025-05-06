import Component2 from "./components/Component2";

const App = () => {
  const products = ["Product1", "Product2", "Product3"];

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Component2 productList={products} />
    </div>
  );
};
export default App;
