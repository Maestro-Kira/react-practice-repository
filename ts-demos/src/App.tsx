import User from "./components/User";

const App = () => {
  return (
    <div>
      <User name="kira" age={20} isStudent={true} status={true} />
    </div>
  );
};

export default App;
