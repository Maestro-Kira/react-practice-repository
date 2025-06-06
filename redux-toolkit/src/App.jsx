// import AllProducts from "./app/components/AllProducts";
// import SpecificProduct from "./app/components/SpecificProduct";
// import AddNewProduct from "./app/components/AddNewProduct";
// import UpdateProduct from "./app/components/UpdateProduct";
import DeletingProduct from "./app/components/DeletingProduct";

const App = () => {
  return (
    <div>
      {/* <AllProducts /> */}
      {/* <SpecificProduct /> */}
      {/* <AddNewProduct /> */}
      {/* <UpdateProduct productId={4} /> */}
      <DeletingProduct productId={2} />
    </div>
  );
};
export default App;
