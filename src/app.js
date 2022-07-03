//format and present current date and time

function formatDateTime(date) {
  let options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour12: false,
    hour: "numeric",
    minute: "numeric"
  };
  let formattedDateTime = date.toLocaleDateString("en-EN", options);
  return formattedDateTime;
}
function formatDate(date) {
  let options = {
    weekday: "short",
    month: "short",
    day: "numeric"
  };
  let formattedDate = date.toLocaleDateString("en-EN", options);
  return formattedDate;
}

// search city or location and give temperature

function giveTemperature(response) {
  //change from empty state to result

  document.getElementById("empty-state").style.display = "none";
  document.getElementById("weather-result").style.display = "block";

  // replace with API response
  document.querySelector("#current-temp").innerHTML = `<strong>${Math.round(
    response.data.main.temp
  )}</strong>° C`;
  document.querySelector("#feel-temp").innerHTML = `Feels like ${Math.round(
    response.data.main.feels_like
  )}° C`;
  document.querySelector("#max-today").innerHTML = `${Math.round(
    response.data.main.temp_max
  )}° ↑`;
  document.querySelector("#min-today").innerHTML = `${Math.round(
    response.data.main.temp_min
  )} ° ↓`;
  document.querySelector("#summary-today").innerHTML =
    response.data.weather[0].description;
  document.querySelector(
    "#humidity-today"
  ).innerHTML = `<strong>Humidity</strong> ${response.data.main.humidity}%`;
  document.querySelector(
    "#wind-today"
  ).innerHTML = `<strong>Wind</strong> ${Math.round(
    response.data.wind.speed * 3.6
  )}km/h`;
  document.querySelector(
    "#pressure-today"
  ).innerHTML = `<strong>Pressure</strong> ${response.data.main.pressure}mb`;
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.getElementById(
    "weather-icon"
  ).src = `img/${response.data.weather[0].icon}.png`;
}

//show searched value in HTML after submittng search
function searchCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#search-input");
  if (newCity.value) {
    let units = "metric";
    let apiUrl = `${apiEndPoint}?q=${newCity.value}&units=${units}&lan=en&appid=${apiKey}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(giveTemperature);
  }
}
function searchPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiUrl = `${apiEndPoint}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(giveTemperature);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(searchPosition);
}

// api
const apiKey = "6bf5993fd6f246de7b98dc6c43d6cd79";
const apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";

// dates
let now = new Date();

// event listeners

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", searchCity);

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", getLocation);

let today = document.querySelector("#current-date");
today.innerHTML = formatDateTime(now);
