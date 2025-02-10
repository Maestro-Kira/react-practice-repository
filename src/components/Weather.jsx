const Weather = ({ temperature }) => {
  let message;
  if (temperature < 15) {
    message = "It's cold outside";
  } else if (temperature >= 15 && temperature <= 24) {
    message = "It's fine outside";
  } else {
    message = "It's hot outside";
  }

  return <div>{message}</div>;
};

export default Weather;
