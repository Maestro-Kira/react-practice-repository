function Greeting() {
  const name = "John";
  const greeting = "Под этим Солнцем и небом я тепло приветствую Вас";
  const now = new Date();
  const date = now.toLocaleDateString("ru-Ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <h1>{greeting}</h1>
      <p>{name}</p>
      <p>{date}</p>
    </div>
  );
}

export default Greeting;
