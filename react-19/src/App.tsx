import { useState } from "react";
import ComponentA from "./components/ComponentA";
import { UserContext } from "./components/userContext";

export interface User {
  id: number;
  name: string;
  age: number;
}

const App = () => {
  const [user] = useState<User>({
    id: 1,
    name: "Kira",
    age: 29,
  });

  return (
    <div>
      <UserContext.Provider value={user}>
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
};
export default App;
