function updateWeatherInfo(response) {
  let weatherTemp = document.querySelector("#weather-temp");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  weatherTemp.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "of08ta1f90c49d4b081b6aa347d98489";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherInfo);
}

function handleSearchSumbit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSumbit);

searchCity("Cape Town");
