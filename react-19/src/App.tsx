import { useEffect, useState } from "react";
import classes from "./styles.module.css";
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

const App = () => {
  const [loading, setLoading] = useState(false);
  const [toDoList, setToDoList] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [todoDetails, setToDoDetails] = useState<Todo | null>(null);
  const [openDialogue, setOpenDialogue] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const data = await apiResponse.json();
      if (data?.todos && data?.todos?.length > 0) {
        setToDoList(data.todos);
      } else {
        setToDoList([]);
        setErrorMessage("");
      }
    } catch (error) {
      setLoading(true);
      console.log(error);
      setErrorMessage("Some Error Happened");
    } finally {
      setLoading(false);
    }
  }

  async function fetchDetailsOfCurrent(getCurrentTodoId: number) {
    console.log(getCurrentTodoId);
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodoId}`
      );
      const details = await apiResponse.json();
      if (details) {
        setToDoDetails(details);
        setOpenDialogue(true);
      } else {
        setToDoDetails(null);
        setOpenDialogue(false);
      }
      console.log(details);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return <Skeleton variant="rectangular" width={650} height={650} />;

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Hello there</h1>

      <div className={classes.todoListWrapper}>
        {toDoList.length > 0
          ? toDoList.map((todoItem) => (
              <TodoItem
                fetchDetailsOfCurrent={fetchDetailsOfCurrent}
                todo={todoItem}
                key={todoItem.id}
              />
            ))
          : null}
      </div>

      <TodoDetails
        setOpenDialogue={setOpenDialogue}
        todoDetails={todoDetails}
        openDialogue={openDialogue}
        setToDoDetails={setToDoDetails}
      />
    </div>
  );
};

export default App;
