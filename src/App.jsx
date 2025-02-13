import { createContext } from "react";
import ComponentA from "./components/ComponentA";
export const Data = createContext();
export const Data1 = createContext();

function App() {
  const name = "Kiraaaaa";
  const age = 28;
  return (
    <section>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </section>
  );
}

export default App;
