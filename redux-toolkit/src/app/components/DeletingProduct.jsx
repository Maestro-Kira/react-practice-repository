import { useDeleteProductMutation } from "../service/dummyData";

const DeletingProduct = ({ productId }) => {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();

  if (error) {
    return <h1>{error}</h1>;
  }

  if (isLoading) {
    return <h1>It's Loading...</h1>;
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (err) {
      console.error("Error deleting product: ", err);
    }
  };

  return (
    <div>
      <h1>{data?.title ? `${data.title} succesfully deleted` : ""}</h1>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete Product
      </button>
    </div>
  );
};
export default DeletingProduct;
