import { useState } from "react";
import {} from "../style.css";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      });
    });

    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div>
      <div className="container">
        <input
          type="text"
          placeholder="New ToDo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>

        <ul className="todos-list">
          {todos.map(({ text, id }) => (
            <li className="todo" key={id}>
              <span>{text}</span>
              <button className="close" onClick={() => removeTodo(id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
