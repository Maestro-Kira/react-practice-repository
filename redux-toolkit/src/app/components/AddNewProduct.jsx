import { useAddNewProductMutation } from "../service/dummyData";

const AddNewProduct = () => {
  const [AddNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  if (error) {
    return <h1>HELP ERROR</h1>;
  }

  if (isLoading) {
    return <h1>WAIT IT LOADS...</h1>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing Product",
        description: "The best new product with amazing quality",
      };
      await AddNewProduct(newProductData);
    } catch (err) {
      console.error("Error while adding new product", err);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>

      <button onClick={handleAddProduct} disabled={isLoading}>
        Add new Product
      </button>
    </div>
  );
};
export default AddNewProduct;
