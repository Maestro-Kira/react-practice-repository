const EventHandling = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked", e.currentTarget);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Mouse Entered", e.currentTarget);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      style={{ border: "solid black 2px", padding: "20px", width: "200px" }}
    >
      <h2>Event handling example</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default EventHandling;
