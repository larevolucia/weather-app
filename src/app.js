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

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

//change temperature from Celsius and Fahrenheit

function convertToF(value) {
  value.preventDefault();
  //changes the class to show selection
  let celsiusSelector = document.querySelector("#celsius");
  let farenheitSelector = document.querySelector("#farenheit");
  farenheitSelector.classList.add("unit-selected");
  celsiusSelector.classList.remove("unit-selected");
  //changes the values today
  let todayFarenheitTemp = Math.round((todayCelsiusTemp * 9) / 5 + 32);
  let todayFeelsFarenheitTemp = Math.round(
    (todayFeelsCelsiusTemp * 9) / 5 + 32
  );

  document.querySelector("#current-temp").innerHTML = `${todayFarenheitTemp}°`;
  document.querySelector(
    "#feel-temp"
  ).innerHTML = `Feels like ${todayFeelsFarenheitTemp}°`;
}

function convertToC(value) {
  value.preventDefault();
  //changes the class to show selection
  let celsiusSelector = document.querySelector("#celsius");
  let farenheitSelector = document.querySelector("#farenheit");
  celsiusSelector.classList.add("unit-selected");
  farenheitSelector.classList.remove("unit-selected");
  //changes the values
  document.querySelector("#current-temp").innerHTML = `${Math.round(
    todayCelsiusTemp
  )}°`;
  document.querySelector("#feel-temp").innerHTML = `Feels like ${Math.round(
    todayFeelsCelsiusTemp
  )}°`;
}

// search city or location and give temperature
function displayForecast(response) {
  console.log(response);

  let forecast = response.data.daily;

  document.querySelector(
    "#rain-today"
  ).innerHTML = `<strong>Chance of rain</strong> ${forecast[0].pop * 100}%`;

  let forecastHTML = `<ul class="list-group rounded-0">`;

  forecast.forEach(function (forecastDay, index) {
    if (index > 0 && index < 6) {
      forecastHTML =
        forecastHTML +
        `<li class="list-group-item collapsible">
           <div class="row">
             <div class="col-6">
               <p class="next-days" id="next-1d"><strong>${formatDay(
                 forecastDay.dt
               )}</strong></p>
             </div>
             <div class="col-6">
                 <p class="temp-next-days">
                   <img src="img/${
                     forecast[index].weather[0].icon
                   }.png" width="30" alt="${
          forecast[index].weather[0].description
        }" />
                   <span class="max-forecast">${Math.ceil(
                     forecast[index].temp.max
                   )}°</span> |
                   <span class="min-forecast">${Math.floor(
                     forecast[index].temp.min
                   )}°</span>
                 </p>
             </div>
           </div>
         </li>
         <li class="list-group-item extra-details">
           <div class="row">
               <div class="col-6">
                 <p class="weather-details"><strong>Chance of rain</strong> ${
                   forecast[index].pop * 100
                 }%</p>
                 <p class="weather-details"><strong>Humidity</strong> ${
                   forecast[index].humidity
                 }%</p>
               </div>
               <div class="col-6">
                 <p class="weather-details"><strong>Wind</strong> ${Math.round(
                   forecast[index].wind_speed * 3.6
                 )}km/h</p>
                 <p class="weather-details"><strong>Pressure</strong>${
                   forecast[index].pressure
                 }mb</p>
               </div>
            </div>
          </li>
         `;
    }
  });

  forecastHTML = forecastHTML + `</ul>`;
  document.querySelector("#forecast-5days").innerHTML = forecastHTML;

  // collapse expand

  let coll = document.getElementsByClassName("collapsible");
  let i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let details = this.nextElementSibling;
      if (details.style.display === "block") {
        details.style.display = "none";
      } else {
        details.style.display = "block";
      }
    });
  }
}
function getTemperature(response) {
  //change from empty state to result
  console.log(response);

  todayCelsiusTemp = Math.round(response.data.main.temp);
  todayFeelsCelsiusTemp = Math.round(response.data.main.feels_like);

  document.getElementById("empty-state").style.display = "none";
  document.getElementById("weather-today").style.display = "block";
  document.getElementById("forecast-5days").style.display = "block";

  // current date

  document.querySelector("#current-temp").innerHTML = `${todayCelsiusTemp}°`;
  document.querySelector(
    "#feel-temp"
  ).innerHTML = `Feels like ${todayFeelsCelsiusTemp}°`;
  document.querySelector("#summary-today").innerHTML =
    response.data.weather[0].description;
  // document.querySelector(
  //   "#rain-today"
  // ).innerHTML = `<strong>Chance of rain</strong>
  //           ${Math.round(response.data.daily[0].pop * 100)}%`;
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
  document.querySelector("#current-city").innerHTML = `${response.data.name}`;
  document
    .querySelector("#weather-icon")
    .setAttribute("src", `img/${response.data.weather[0].icon}.png`);
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let units = "metric";
  let apiUrl = `${apiForecastEndPoint}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKeyWeather}`;
  axios.get(apiUrl).then(displayForecast);
}

function searchCity(city) {
  let searchInput = city;
  debugger;
  let apiUrl = `${apiWeatherEndPoint}?q=${searchInput}&units=metric&appid=${apiKeyWeather}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(getTemperature);
}

//show searched value in HTML after submittng search
function submitHandle(event) {
  event.preventDefault();
  let newCity = document.querySelector("#search-input");
  if (newCity.value) {
    searchCity(newCity.value);
  }
}

function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiUrl = `${apiWeatherEndPoint}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKeyWeather}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(getTemperature);
}

function fetchLocation() {
  navigator.geolocation.getCurrentPosition(getPosition);
}

// api
const apiKeyWeather = "6bf5993fd6f246de7b98dc6c43d6cd79";
const apiForecastEndPoint = "https://api.openweathermap.org/data/2.5/onecall";
const apiWeatherEndPoint = "https://api.openweathermap.org/data/2.5/weather";
//const apiKeyTimezone = "W3RKUIYB1P7Z";
//const apiTimezoneEndPoint = "http://api.timezonedb.com/v2.1/get-time-zone";
// let timezoneUrl = `${apiTimezoneEndPoint}?key=${apiKeyTimezone}&format=json&by=position&lat=40.689247&lng=-74.044502 `;

// dates

let now = new Date();

// temperatures

let todayCelsiusTemp = null;
let todayFeelsCelsiusTemp = null;

// event listeners

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", submitHandle);

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", fetchLocation);

let today = document.querySelector("#current-date");
today.innerHTML = formatDateTime(now);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", convertToC);

let farenheitLink = document.querySelector("#farenheit");
farenheitLink.addEventListener("click", convertToF);
