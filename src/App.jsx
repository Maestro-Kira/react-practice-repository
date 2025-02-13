import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) {
        setData(data);
      }
    }
    getData();
  }, []);

  return (
    <section>
      <ul>
        {data.map((todo) => (
          <section key={todo.id}>
            <li>
              Title: <br />
              {todo.title}
            </li>
            <li>
              Body: <br />
              {todo.body}
            </li>
          </section>
        ))}
      </ul>
    </section>
  );
}

export default App;
