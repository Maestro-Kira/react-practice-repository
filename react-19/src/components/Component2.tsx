import Component1 from "./Component1";

export type Props = {
  productList: string[];
};

const Component2 = ({ productList }: Props) => {
  return (
    <ul>
      {productList.map((product, key) => (
        <li key={key}>
          <Component1 products={product} />
        </li>
      ))}
    </ul>
  );
};
export default Component2;
