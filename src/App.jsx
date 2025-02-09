import UserStatus from "./components/UserStatus";

function App() {
  return (
    <div>
      <UserStatus loggedIn={true} isAdmin={false} />
    </div>
  );
}

export default App;
