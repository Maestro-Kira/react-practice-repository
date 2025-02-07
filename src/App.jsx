import User from "./components/User";

function App() {
  return (
    <User
      preferences={["coding", "swimming", "reading"]}
      name="Kira"
      age="28"
    />
  );
}

export default App;
