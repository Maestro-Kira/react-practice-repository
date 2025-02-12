import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    if (task === "") {
      return;
    }
    setTasks((previousTasks) => {
      return [...previousTasks, task];
    });
    setTask("");
  };
  return (
    <div>
      <h1>TO DO LIST</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Task Name</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        <button type="submit">Let&#39;s go!</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
