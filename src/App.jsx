import UpdateUser from "./components/UpdateUser";
import { UserProvider } from "./components/UserContext";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </div>
  );
}

export default App;
