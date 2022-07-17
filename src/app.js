// collapse and expand forecast

function collapse() {
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
  formatTable();
}

function formatTable() {
  document
    .querySelector("#day-5-summary")
    .addEventListener("click", function (event) {
      if (document.querySelector("#day-5-details").style.display === "block") {
        document
          .querySelector("#day-5-summary")
          .classList.remove("rounded-bottom");
      } else {
        document
          .querySelector("#day-5-summary")
          .classList.add("rounded-bottom");
      }
    });
}

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
  farenheitSelector.classList.add("unit-selected");
  celsiusSelector.classList.remove("unit-selected");
  //changes the values today

  document.querySelector("#current-temp").innerHTML = `${Math.round(
    (todayCelsiusTemp * 9) / 5 + 32
  )}°`;
  document.querySelector("#feel-temp").innerHTML = `Feels like ${Math.round(
    (todayFeelsCelsiusTemp * 9) / 5 + 32
  )}°`;
  //changes forecast values
  document.querySelector("#max-temp-1").innerHTML = Math.round(
    (maxTemp1C * 9) / 5 + 32
  );
  document.querySelector("#min-temp-1").innerHTML = Math.round(
    (minTemp1C * 9) / 5 + 32
  );
  document.querySelector("#max-temp-2").innerHTML = Math.round(
    (maxTemp2C * 9) / 5 + 32
  );
  document.querySelector("#min-temp-2").innerHTML = Math.round(
    (minTemp2C * 9) / 5 + 32
  );
  document.querySelector("#max-temp-3").innerHTML = Math.round(
    (maxTemp3C * 9) / 5 + 32
  );
  document.querySelector("#min-temp-3").innerHTML = Math.round(
    (minTemp3C * 9) / 5 + 32
  );
  document.querySelector("#max-temp-4").innerHTML = Math.round(
    (maxTemp4C * 9) / 5 + 32
  );
  document.querySelector("#min-temp-4").innerHTML = Math.round(
    (minTemp4C * 9) / 5 + 32
  );
  document.querySelector("#max-temp-5").innerHTML = Math.round(
    (maxTemp5C * 9) / 5 + 32
  );
  document.querySelector("#min-temp-5").innerHTML = Math.round(
    (minTemp5C * 9) / 5 + 32
  );

  document.querySelector(
    "#wind-today"
  ).innerHTML = `<i class="fa-solid fa-wind m-1"></i> ${Math.round(
    windTodayMetric * 2.23694
  )}mph`;
  document.querySelector("#wind-d1").innerHTML = `${Math.round(
    windD1Metric * 2.23694
  )}mph`;
  document.querySelector("#wind-d2").innerHTML = `${Math.round(
    windD2Metric * 2.23694
  )}mph`;
  document.querySelector("#wind-d3").innerHTML = `${Math.round(
    windD3Metric * 2.23694
  )}mph`;
  document.querySelector("#wind-d4").innerHTML = `${Math.round(
    windD4Metric * 2.23694
  )}mph`;
  document.querySelector("#wind-d5").innerHTML = `${Math.round(
    windD5Metric * 2.23694
  )}mph`;
}

function convertToC(value) {
  value.preventDefault();
  //changes the class to show selection

  celsiusSelector.classList.add("unit-selected");
  farenheitSelector.classList.remove("unit-selected");
  //changes the values
  document.querySelector("#current-temp").innerHTML = `${Math.round(
    todayCelsiusTemp
  )}°`;
  document.querySelector("#feel-temp").innerHTML = `Feels like ${Math.round(
    todayFeelsCelsiusTemp
  )}°`;
  document.querySelector("#max-temp-1").innerHTML = maxTemp1C;
  document.querySelector("#min-temp-1").innerHTML = minTemp1C;
  document.querySelector("#max-temp-2").innerHTML = maxTemp2C;
  document.querySelector("#min-temp-2").innerHTML = minTemp2C;
  document.querySelector("#max-temp-3").innerHTML = maxTemp3C;
  document.querySelector("#min-temp-3").innerHTML = minTemp3C;
  document.querySelector("#max-temp-4").innerHTML = maxTemp4C;
  document.querySelector("#min-temp-4").innerHTML = minTemp4C;
  document.querySelector("#max-temp-5").innerHTML = maxTemp5C;
  document.querySelector("#min-temp-5").innerHTML = minTemp5C;

  document.querySelector(
    "#wind-today"
  ).innerHTML = `<i class="fa-solid fa-wind m-1"></i> ${windTodayMetric}m/s`;
  document.querySelector("#wind-d1").innerHTML = `${windD1Metric}m/s`;
  document.querySelector("#wind-d2").innerHTML = `${windD2Metric}m/s`;
  document.querySelector("#wind-d3").innerHTML = `${windD3Metric}m/s`;
  document.querySelector("#wind-d4").innerHTML = `${windD4Metric}m/s`;
  document.querySelector("#wind-d5").innerHTML = `${windD5Metric}m/s`;
}

// search city or location and give temperature
function showForecast(response) {
  console.log(response);

  let forecast = response.data.daily;

  maxTemp1C = Math.ceil(forecast[1].temp.max);
  minTemp1C = Math.floor(forecast[1].temp.min);
  maxTemp2C = Math.ceil(forecast[2].temp.max);
  minTemp2C = Math.floor(forecast[2].temp.min);
  maxTemp3C = Math.ceil(forecast[3].temp.max);
  minTemp3C = Math.floor(forecast[3].temp.min);
  maxTemp4C = Math.ceil(forecast[4].temp.max);
  minTemp4C = Math.floor(forecast[4].temp.min);
  maxTemp5C = Math.ceil(forecast[5].temp.max);
  minTemp5C = Math.floor(forecast[5].temp.min);

  windD1Metric = Math.round(forecast[1].wind_speed);
  windD2Metric = Math.round(forecast[2].wind_speed);
  windD3Metric = Math.round(forecast[3].wind_speed);
  windD4Metric = Math.round(forecast[4].wind_speed);
  windD5Metric = Math.round(forecast[5].wind_speed);

  document.querySelector(
    "#rain-today"
  ).innerHTML = `<i class="fa-solid fa-umbrella"></i> ${Math.round(
    forecast[0].pop * 100
  )}%`;

  let forecastHTML = `<ul class="list-group">`;

  forecast.forEach(function (forecastDay, index) {
    if (index > 0 && index < 6) {
      forecastHTML =
        forecastHTML +
        `<li class="list-group-item collapsible" id="day-${index}-summary">
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
                   <span class="max-forecast" id="max-temp-${index}">${Math.ceil(
          forecast[index].temp.max
        )}</span>°
                   <span class="min-forecast" id="min-temp-${index}">${Math.floor(
          forecast[index].temp.min
        )}</span>°
                 </p>
             </div>
           </div>
         </li>
         <li class="list-group-item extra-details" id="day-${index}-details">
           <div class="row">
               <div class="col-6">
                 <p class="weather-details"><i class="fa-solid fa-umbrella"></i> ${Math.round(
                   forecast[index].pop * 100
                 )}%</p>
                 <p class="weather-details"><i class="fa-solid fa-droplet"></i> ${
                   forecast[index].humidity
                 }%</p>
               </div>
               <div class="col-6">
                 <p class="weather-details"><i class="fa-solid fa-wind m-1"></i> <span id="wind-d${index}">${Math.round(
          forecast[index].wind_speed
        )} m/s</span></p>
                 <p class="weather-details"><span class="iconify" data-icon="wi:barometer" data-width="22"></span>${
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
  collapse();

  // table format
  document.querySelector("#day-5-summary").classList.add("rounded-bottom");
}
function showTemperature(response) {
  //change from empty state to result
  console.log(response);

  celsiusSelector.classList.add("unit-selected");
  farenheitSelector.classList.remove("unit-selected");

  todayCelsiusTemp = Math.round(response.data.main.temp);
  todayFeelsCelsiusTemp = Math.round(response.data.main.feels_like);

  windTodayMetric = Math.round(response.data.wind.speed);

  document.getElementById("empty-state").innerHTML = ``;
  document.getElementById("weather-today").style.display = "block";
  document.getElementById("forecast-5days").style.display = "block";

  // current date

  document.querySelector("#current-temp").innerHTML = `${todayCelsiusTemp}°`;
  document.querySelector(
    "#feel-temp"
  ).innerHTML = `Feels like ${todayFeelsCelsiusTemp}°`;
  document.querySelector("#summary-today").innerHTML =
    response.data.weather[0].description;
  document.querySelector(
    "#humidity-today"
  ).innerHTML = `<i class="fa-solid fa-droplet"></i> ${response.data.main.humidity}%`;
  document.querySelector(
    "#wind-today"
  ).innerHTML = `<i class="fa-solid fa-wind m-1"></i>  ${windTodayMetric}m/s`;
  document.querySelector(
    "#pressure-today"
  ).innerHTML = `<span class="iconify" data-icon="wi:barometer" data-width="22"></span>
${response.data.main.pressure}mb`;
  document.querySelector("#current-city").innerHTML = `${response.data.name}`;
  document
    .querySelector("#weather-icon")
    .setAttribute("src", `img/${response.data.weather[0].icon}.png`);
  document
    .querySelector("#weather-icon")
    .setAttribute("alt", response.data.weather[0].description);

  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let units = "metric";
  let apiUrl = `${apiForecastEndPoint}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKeyWeather}`;
  axios.get(apiUrl).then(showForecast);
}

function searchCity(city) {
  let searchInput = city;
  let apiUrl = `${apiWeatherEndPoint}?q=${searchInput}&units=metric&appid=${apiKeyWeather}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
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
  axios.get(apiUrl).then(showTemperature);
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
let maxTemp1C = null;
let minTemp1C = null;
let maxTemp2C = null;
let minTemp2C = null;
let maxTemp3C = null;
let minTemp3C = null;
let maxTemp4C = null;
let minTemp4C = null;
let maxTemp5C = null;
let minTemp5C = null;

let celsiusSelector = document.querySelector("#celsius");
let farenheitSelector = document.querySelector("#farenheit");

// wind

let windTodayMetric = null;
let windD1Metric = null;
let windD2Metric = null;
let windD3Metric = null;
let windD4Metric = null;
let windD5Metric = null;

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
