import AdminInfo from "./AdminInfo";
import UserInfo from "./UserInfo";

const App = () => {
  return (
    <div>
      <UserInfo
        id={1}
        name="Kira"
        surname="Vlasenko"
        age={29}
        email="kira@vlas.gmail.com"
        online={true}
      />

      <br />
      <br />

      <AdminInfo
        id={2}
        name="Ivet"
        surname="Vlasenko"
        age={22}
        email="ivi@vlas.gmail.com"
        online={false}
        rank="BOSS"
      />
    </div>
  );
};

export default App;
