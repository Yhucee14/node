function genrateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celcuisToFahrenheit(celcuis) {
  return (celcuis * 9) / 5 + 32;
}

module.exports = {
  genrateRandomNumber,
  celcuisToFahrenheit,
};
