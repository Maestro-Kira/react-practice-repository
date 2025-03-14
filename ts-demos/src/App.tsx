import Button from "./Button";

const App = () => {
  const onClick = () => {
    alert("Youclicked ME!");
  };
  return (
    <div>
      <Button label="CLick me please" onClick={onClick} disabled={false} />
      <br />
      <br />
      <br />
      <Button label="CLick me please" onClick={onClick} disabled={true} />
    </div>
  );
};

export default App;
