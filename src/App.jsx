import ComponentA from "./components/ComponentA";

function App() {
  const name = "Kira";
  return (
    <section>
      <ComponentA name={name} />
    </section>
  );
}

export default App;
