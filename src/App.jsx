import Greetings from "./components/Greetings";
import UserInfo from "./components/UserInfo";
import Weather from "./components/Weather";

function App() {
  return (
    <div>
      <Greetings time="Morning" />
      <UserInfo loggedIn={true} isAdmin={true} />
      <Weather temperature={-1} />
    </div>
  );
}

export default App;
