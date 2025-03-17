import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <div>
      <h1>User info 👇</h1>
      <UserInfo
        username="Alex"
        email="alex@gmail.com"
        age={20}
        location={["Earth", "USA"]}
      />
      <h1>Admin info 👇</h1>
      <AdminInfo
        username="Alex"
        email="alex@gmail.com"
        age={20}
        location={["Mars", "Unkown"]}
        admin="yes"
      />
    </div>
  );
};

export default App;
