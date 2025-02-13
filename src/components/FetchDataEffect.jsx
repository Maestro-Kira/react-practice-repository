import { useEffect } from "react";
import { useState } from "react";
//https://jsonplaceholder.typicode.com/posts
const FetchDataEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  });
  return (
    <div>
      <h1>DATA FROM POSTS</h1>
      <ul>
        {data.map((post) => (
          <section key={post.id}>
            <li>This is Post nr: {post.id}</li>
            <li>Title: {post.title}</li>
            <li>Post Body: {post.body}</li>
            <br />
          </section>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataEffect;
