function User({ preferences, name, age }) {
  console.log(preferences);

  return (
    <div>
      <p>
        My name is {name} I am {age} old my hobbies are:
      </p>
      {preferences.map((hobby, index) => (
        <ul key={index}>
          <li>{hobby}</li>
        </ul>
      ))}
    </div>
  );
}

export default User;
