const Weather = ({ temp }) => {
  let message;

  if (temp < 15) {
    message = "It's cold outside";
  } else if (temp >= 15 && temp <= 25) {
    message = "It's fine outside";
  } else {
    message = "It's hot outside";
  }

  return <div>The weather is {message}</div>;
};

export default Weather;
