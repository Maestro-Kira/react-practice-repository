const Greetings = ({ time }) => {
  return (
    <div>
      <h2>
        {time === "Morning"
          ? "good morning"
          : time === "Evening"
          ? "good evening"
          : "Hello"}
      </h2>
    </div>
  );
};

export default Greetings;
