import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchTodos = async (page = 1, limit = 10) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
  );

  if (!response.ok) throw new Error("Response not ok");
  return response.json();
};

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { data, error, isLoading } = useQuery({
    queryKey: ["todos", currentPage],
    queryFn: () => fetchTodos(currentPage, pageSize),
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>Todos</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        <button
          className="bg-black text-white p-4"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-black text-white p-4"
          onClick={handleNextPage}
          disabled={currentPage === 20}
        >
          Next
        </button>
      </div>
      <p>Page: {currentPage}</p>
    </div>
  );
};
export default Pagination;
