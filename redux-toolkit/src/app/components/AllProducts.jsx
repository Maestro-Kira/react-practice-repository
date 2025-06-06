import { useGetAllProductsQuery } from "../service/dummyData";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();
  console.log(data);

  if (isError) {
    return <h1>Oh noo error here!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {data?.products.map((p) => (
        <>
          <h1 key={p.id}>{p.title}</h1>
          <p>{p.description}</p>
        </>
      ))}
    </div>
  );
};
export default AllProducts;
