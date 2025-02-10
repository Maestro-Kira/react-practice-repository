import { useState } from "react";

function App() {
  const [friends, setFriends] = useState(["Alex", "Sam", "John"]);
  const addOneFriend = () => setFriends([...friends, "Kira"]);
  const removeOneFriend = () =>
    setFriends(friends.filter((friend) => friend !== "John"));
  const updateOneFriend = () =>
    setFriends(
      friends.map((friend) => (friend === "Alex" ? "Alex Smith" : friend))
    );

  return (
    <section>
      {friends.map((friend) => (
        <li key={Math.random()}>{friend}</li>
      ))}

      <button onClick={addOneFriend}>Add New Friend</button>
      <button onClick={removeOneFriend}>Remove One Friend</button>
      <button onClick={updateOneFriend}>Update one friend</button>
    </section>
  );
}

export default App;
