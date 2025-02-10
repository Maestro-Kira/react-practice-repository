const Copy = () => {
  const copyHandler = () => {
    alert("DON'T COPY!!");
  };

  return (
    <p onCopy={copyHandler}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti maxime
      corrupti eos odio, eius non ea nobis itaque facere sequi?
    </p>
  );
};

function App() {
  return (
    <section>
      <Copy />
    </section>
  );
}

export default App;
