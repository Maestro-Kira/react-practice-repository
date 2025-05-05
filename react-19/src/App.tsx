import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
};

const App = () => {
  const [serverData, setServerData] = useState<Product[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    async function FetchData() {
      try {
        setLoadingData(true);
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const { products } = data;
        setServerData(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingData(false);
      }
    }

    FetchData();
  }, []);

  return (
    <div>
      {loadingData ? (
        <p>Loading...</p>
      ) : (
        serverData.map((product) => (
          <div className="mb-4" key={product.id}>
            <h2 className="text-2xl font-black">{product.title}</h2>
            <p className="font-light">{product.description}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default App;
