import Counter from "./components/Counter";
import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <section>
      <Counter />
      <ToDoList />
      <Profile />
      <ShoppingList />
    </section>
  );
}

export default App;
