import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const fetchTodos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
};

const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const FetchFromManyEndpoints = () => {
  const [currentToDoId, setCurrentToDoId] = useState(1);
  const [currentPostId, setCurrentPostId] = useState(1);

  const handleNextToDoClick = () => {
    setCurrentToDoId((prevId) => Math.min(prevId + 1, todosData.length));
  };

  const results = useQueries({
    queries: [
      {
        queryKey: ["todos"],
        queryFn: fetchTodos,
      },
      {
        queryKey: ["posts"],
        queryFn: fetchPosts,
      },
    ],
  });

  const [todosQuery, postsQuery] = results;

  if (todosQuery.isLoading || postsQuery.isLoading) return <h1>Loading...</h1>;
  if (todosQuery.error || postsQuery.error)
    return (
      <h1>
        An error occured:{" "}
        {todosQuery.error?.message || postsQuery.error?.message}
      </h1>
    );

  const todosData = todosQuery.data;
  const postsData = postsQuery.data;

  return (
    <div>
      <h1>TOdos</h1>
      <pre>
        {JSON.stringify(
          todosData.find((todo: any) => todo.id === currentToDoId),
          null,
          2
        )}
      </pre>

      <button
        className="bg-teal-700 text-white p-2"
        onClick={handleNextToDoClick}
      >
        Next Todo
      </button>
    </div>
  );
};
export default FetchFromManyEndpoints;
