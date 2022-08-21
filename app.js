function search(city) {
  let apiKey = "6a7c1bfd99e970bc4fa688e82bc03523";
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}
