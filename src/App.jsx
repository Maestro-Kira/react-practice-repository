function App() {
  const usersInfo = [
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      location: "New York, USA",
    },
    {
      name: "Carlos Martinez",
      email: "carlos@example.com",
      location: "Madrid, Spain",
    },
    {
      name: "Hiroshi Tanaka",
      email: "hiroshi@example.com",
      location: "Tokyo, Japan",
    },
  ];

  return (
    <main>
      {usersInfo.map(({ name, email, location }, index) => (
        <ul key={index}>
          <li>{name}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))}
    </main>
  );
}

export default App;
