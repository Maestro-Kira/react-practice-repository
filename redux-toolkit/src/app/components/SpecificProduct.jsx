import { useGetProductByIdQuery } from "../service/dummyData";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(9);
  console.log(data);

  if (isError) {
    return <h1>THERE IS ERROR</h1>;
  }

  if (isLoading) {
    return <h1>Loading Data...</h1>;
  }

  return (
    <div>
      <h1>{data?.brand}</h1>
      <h1>{data?.category}</h1>
      <h1>{data?.price}$</h1>
      <h6>{data?.description}$</h6>
    </div>
  );
};
export default SpecificProduct;
