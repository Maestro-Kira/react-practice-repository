// `https://jsonplaceholder.typicode.com/todos/${id}`

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const WithoutTanstackQuery = () => {
  const [id, setId] = useState(1);

  const fetchTodoList = async ({ queryKey }) => {
    const [_key, id] = queryKey;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["todos", id],
    queryFn: fetchTodoList,
  });

  if (isLoading) return <h1>Loading Data</h1>;
  if (error) return <p>An error occured: {error.message}</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <h1>ID: {data.id}</h1>
      <button
        className="p-[1rem] bg-black text-white cursor-pointer"
        onClick={() => setId((prevId) => prevId + 1)}
      >
        Next
      </button>
    </div>
  );
};
export default WithoutTanstackQuery;
