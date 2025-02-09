const ValidPassword = () => <h1>Valid Password</h1>;

const InvalidPassword = () => <h1>inValid Password</h1>;

const Password = ({ isValid }) =>
  isValid ? <ValidPassword /> : <InvalidPassword />;

function App() {
  return (
    <div>
      <Password isValid={false} />
    </div>
  );
}

export default App;
