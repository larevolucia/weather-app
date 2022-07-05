//collapse and expand forecast

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
// change layout of last list item on click

document
  .querySelector("#day-5-summary")
  .addEventListener("click", function (event) {
    if (document.querySelector("#day-5-details").style.display === "block") {
      document
        .querySelector("#day-5-summary")
        .classList.remove("rounded-bottom");
    } else {
      document.querySelector("#day-5-summary").classList.add("rounded-bottom");
    }
  });

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
  //changes the values tomorrow

  let next1DayFarenheitMaxTemp = Math.round(
    (next1DayCelsiusMaxTemp * 9) / 5 + 32
  );
  let next1DayFarenheitMinTemp = Math.round(
    (next1DayCelsiusMinTemp * 9) / 5 + 32
  );
  let next2DayFarenheitMaxTemp = Math.round(
    (next2DayCelsiusMaxTemp * 9) / 5 + 32
  );
  let next2DayFarenheitMinTemp = Math.round(
    (next2DayCelsiusMinTemp * 9) / 5 + 32
  );
  let next3DayFarenheitMaxTemp = Math.round(
    (next3DayCelsiusMaxTemp * 9) / 5 + 32
  );
  let next3DayFarenheitMinTemp = Math.round(
    (next3DayCelsiusMinTemp * 9) / 5 + 32
  );
  let next4DayFarenheitMaxTemp = Math.round(
    (next4DayCelsiusMaxTemp * 9) / 5 + 32
  );
  let next4DayFarenheitMinTemp = Math.round(
    (next4DayCelsiusMinTemp * 9) / 5 + 32
  );
  let next5DayFarenheitMaxTemp = Math.round(
    (next5DayCelsiusMaxTemp * 9) / 5 + 32
  );
  let next5DayFarenheitMinTemp = Math.round(
    (next5DayCelsiusMinTemp * 9) / 5 + 32
  );

  document.querySelector(
    "#max-next-1d"
  ).innerHTML = `${next1DayFarenheitMaxTemp}°`;
  document.querySelector(
    "#min-next-1d"
  ).innerHTML = `${next1DayFarenheitMinTemp}°`;
  document.querySelector(
    "#max-next-2d"
  ).innerHTML = `${next2DayFarenheitMaxTemp}°`;
  document.querySelector(
    "#min-next-2d"
  ).innerHTML = `${next2DayFarenheitMinTemp}°`;
  document.querySelector(
    "#max-next-3d"
  ).innerHTML = `${next3DayFarenheitMaxTemp}°`;
  document.querySelector(
    "#min-next-3d"
  ).innerHTML = `${next3DayFarenheitMinTemp}°`;
  document.querySelector(
    "#max-next-4d"
  ).innerHTML = `${next4DayFarenheitMaxTemp}°`;
  document.querySelector(
    "#min-next-4d"
  ).innerHTML = `${next4DayFarenheitMinTemp}°`;
  document.querySelector(
    "#max-next-5d"
  ).innerHTML = `${next5DayFarenheitMaxTemp}°`;
  document.querySelector(
    "#min-next-5d"
  ).innerHTML = `${next5DayFarenheitMinTemp}°`;
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

  document.querySelector("#max-next-1d").innerHTML = `${Math.round(
    next1DayCelsiusMaxTemp
  )}°`;
  document.querySelector("#min-next-1d").innerHTML = `${Math.round(
    next1DayCelsiusMinTemp
  )}°`;
  document.querySelector("#max-next-2d").innerHTML = `${Math.round(
    next2DayCelsiusMaxTemp
  )}°`;
  document.querySelector("#min-next-2d").innerHTML = `${Math.round(
    next2DayCelsiusMinTemp
  )}°`;
  document.querySelector("#max-next-3d").innerHTML = `${Math.round(
    next3DayCelsiusMaxTemp
  )}°`;
  document.querySelector("#min-next-3d").innerHTML = `${Math.round(
    next3DayCelsiusMinTemp
  )}°`;
  document.querySelector("#max-next-4d").innerHTML = `${Math.round(
    next4DayCelsiusMaxTemp
  )}°`;
  document.querySelector("#min-next-4d").innerHTML = `${Math.round(
    next4DayCelsiusMinTemp
  )}°`;
  document.querySelector("#max-next-5d").innerHTML = `${Math.round(
    next5DayCelsiusMaxTemp
  )}°`;
  document.querySelector("#min-next-5d").innerHTML = `${Math.round(
    next5DayCelsiusMinTemp
  )}°`;
}

// search city or location and give temperature

function giveTemperature(response) {
  //change from empty state to result

  document.getElementById("empty-state").style.display = "none";
  document.getElementById("weather-today").style.display = "block";
  document.getElementById("forecast-5days").style.display = "block";

  // current date
  todayCelsiusTemp = response.data.list[0].main.temp;
  todayFeelsCelsiusTemp = response.data.list[0].main.feels_like;
  document.querySelector("#current-temp").innerHTML = `${Math.round(
    todayCelsiusTemp
  )}°`;
  document.querySelector("#feel-temp").innerHTML = `Feels like ${Math.round(
    todayFeelsCelsiusTemp
  )}°`;
  document.querySelector("#summary-today").innerHTML =
    response.data.list[0].weather[0].description;
  document.querySelector(
    "#rain-today"
  ).innerHTML = `<strong>Chance of rain</strong> 
            ${Math.round(response.data.list[0].pop * 100)}%`;
  document.querySelector(
    "#humidity-today"
  ).innerHTML = `<strong>Humidity</strong> ${response.data.list[0].main.humidity}%`;
  document.querySelector(
    "#wind-today"
  ).innerHTML = `<strong>Wind</strong> ${Math.round(
    response.data.list[0].wind.speed * 3.6
  )}km/h`;
  document.querySelector(
    "#pressure-today"
  ).innerHTML = `<strong>Pressure</strong> ${response.data.list[0].main.pressure}mb`;
  document.querySelector("#current-city").innerHTML = response.data.city.name;
  document
    .querySelector("#weather-icon")
    .setAttribute("src", `img/${response.data.list[0].weather[0].icon}.png`);
  document
    .querySelector("#weather-icon")
    .setAttribute("alt", response.data.list[0].weather[0].main);
  // tomorrow

  next1DayCelsiusMaxTemp = response.data.list[1].main.temp_max;
  next1DayCelsiusMinTemp = response.data.list[1].main.temp_min;

  document.getElementById(
    "icon-next-1d"
  ).src = `img/${response.data.list[1].weather[0].icon.slice(0, -1)}d.png`;
  document
    .querySelector("#icon-next-1d")
    .setAttribute("alt", response.data.list[1].weather[0].main);
  document.querySelector("#max-next-1d").innerHTML = `${Math.ceil(
    next1DayCelsiusMaxTemp
  )}°`;
  document.querySelector("#min-next-1d").innerHTML = `${Math.floor(
    next1DayCelsiusMinTemp
  )}°`;
  document.querySelector(
    "#rain-next-1d"
  ).innerHTML = `<strong>Chance of rain</strong> 
          ${Math.round(response.data.list[1].pop * 100)}%`;
  document.querySelector(
    "#humidity-next-1d"
  ).innerHTML = `<strong>Humidity</strong> ${response.data.list[1].main.humidity}%`;
  document.querySelector(
    "#wind-next-1d"
  ).innerHTML = `<strong>Wind</strong> ${Math.round(
    response.data.list[1].wind.speed * 3.6
  )}km/h`;
  document.querySelector(
    "#pressure-next-1d"
  ).innerHTML = `<strong>Pressure</strong> ${response.data.list[1].main.pressure}mb`;

  // day 2

  next2DayCelsiusMaxTemp = response.data.list[2].main.temp_max;
  next2DayCelsiusMinTemp = response.data.list[2].main.temp_min;

  document.getElementById(
    "icon-next-2d"
  ).src = `img/${response.data.list[2].weather[0].icon.slice(0, -1)}d.png`;
  document
    .querySelector("#icon-next-2d")
    .setAttribute("alt", response.data.list[2].weather[0].main);
  document.querySelector("#max-next-2d").innerHTML = `${Math.ceil(
    next2DayCelsiusMaxTemp
  )}°`;
  document.querySelector("#min-next-2d").innerHTML = `${Math.floor(
    next2DayCelsiusMinTemp
  )}°`;
  document.querySelector(
    "#rain-next-2d"
  ).innerHTML = `<strong>Chance of rain</strong> 
    ${Math.round(response.data.list[2].pop * 100)}%`;
  document.querySelector(
    "#humidity-next-2d"
  ).innerHTML = `<strong>Humidity</strong> ${response.data.list[2].main.humidity}%`;
  document.querySelector(
    "#wind-next-2d"
  ).innerHTML = `<strong>Wind</strong> ${Math.round(
    response.data.list[2].wind.speed * 3.6
  )}km/h`;
  document.querySelector(
    "#pressure-next-2d"
  ).innerHTML = `<strong>Pressure</strong> ${response.data.list[2].main.pressure}mb`;

  // day 3

  next3DayCelsiusMaxTemp = response.data.list[3].main.temp_max;
  next3DayCelsiusMinTemp = response.data.list[3].main.temp_min;
  document.getElementById(
    "icon-next-3d"
  ).src = `img/${response.data.list[3].weather[0].icon.slice(0, -1)}d.png`;
  document
    .querySelector("#icon-next-3d")
    .setAttribute("alt", response.data.list[3].weather[0].main);
  document.querySelector("#max-next-3d").innerHTML = `${Math.ceil(
    next3DayCelsiusMaxTemp
  )}°`;
  document.querySelector("#min-next-3d").innerHTML = `${Math.floor(
    next3DayCelsiusMinTemp
  )}°`;
  document.querySelector(
    "#rain-next-3d"
  ).innerHTML = `<strong>Chance of rain</strong> 
              ${Math.round(response.data.list[3].pop * 100)}%`;
  document.querySelector(
    "#humidity-next-3d"
  ).innerHTML = `<strong>Humidity</strong> ${response.data.list[3].main.humidity}%`;
  document.querySelector(
    "#wind-next-3d"
  ).innerHTML = `<strong>Wind</strong> ${Math.round(
    response.data.list[3].wind.speed * 3.6
  )}km/h`;
  document.querySelector(
    "#pressure-next-3d"
  ).innerHTML = `<strong>Pressure</strong> ${response.data.list[3].main.pressure}mb`;

  // day 4

  next4DayCelsiusMaxTemp = response.data.list[4].main.temp_max;
  next4DayCelsiusMinTemp = response.data.list[4].main.temp_min;
  document.getElementById(
    "icon-next-4d"
  ).src = `img/${response.data.list[4].weather[0].icon.slice(0, -1)}d.png`;
  document
    .querySelector("#icon-next-4d")
    .setAttribute("alt", response.data.list[4].weather[0].main);
  document.querySelector("#max-next-4d").innerHTML = `${Math.ceil(
    next4DayCelsiusMaxTemp
  )}°`;
  document.querySelector("#min-next-4d").innerHTML = `${Math.floor(
    next4DayCelsiusMinTemp
  )}°`;
  document.querySelector(
    "#rain-next-4d"
  ).innerHTML = `<strong>Chance of rain</strong> 
      ${Math.round(response.data.list[4].pop * 100)}%`;
  document.querySelector(
    "#humidity-next-4d"
  ).innerHTML = `<strong>Humidity</strong> ${response.data.list[4].main.humidity}%`;
  document.querySelector(
    "#wind-next-4d"
  ).innerHTML = `<strong>Wind</strong> ${Math.round(
    response.data.list[4].wind.speed * 3.6
  )}km/h`;
  document.querySelector(
    "#pressure-next-4d"
  ).innerHTML = `<strong>Pressure</strong> ${response.data.list[4].main.pressure}mb`;

  // day 5
  next5DayCelsiusMaxTemp = response.data.list[5].main.temp_max;
  next5DayCelsiusMinTemp = response.data.list[5].main.temp_min;

  document.getElementById(
    "icon-next-5d"
  ).src = `img/${response.data.list[5].weather[0].icon.slice(0, -1)}d.png`;
  document
    .querySelector("#icon-next-5d")
    .setAttribute("alt", response.data.list[5].weather[0].main);
  document.querySelector("#max-next-5d").innerHTML = `${Math.ceil(
    next5DayCelsiusMaxTemp
  )}°`;
  document.querySelector("#min-next-5d").innerHTML = `${Math.floor(
    next5DayCelsiusMinTemp
  )}°`;
  document.querySelector(
    "#rain-next-5d"
  ).innerHTML = `<strong>Chance of rain</strong> 
        ${Math.round(response.data.list[5].pop * 100)}%`;
  document.querySelector(
    "#humidity-next-5d"
  ).innerHTML = `<strong>Humidity</strong> ${response.data.list[5].main.humidity}%`;
  document.querySelector(
    "#wind-next-5d"
  ).innerHTML = `<strong>Wind</strong> ${Math.round(
    response.data.list[5].wind.speed * 3.6
  )}km/h`;
  document.querySelector(
    "#pressure-next-5d"
  ).innerHTML = `<strong>Pressure</strong> ${response.data.list[5].main.pressure}mb`;
}

function getCoordinates(response) {
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let units = "metric";
  let apiUrl = `${apiEndPoint}?lat=${lat}&lon=${lon}&units=${units}&cnt=6&appid=${apiKey}`;
  axios.get(apiUrl).then(giveTemperature);
}
//show searched value in HTML after submittng search
function searchCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#search-input");
  if (newCity.value) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity.value}&appid=${apiKey}`;
    axios
      .get(apiUrl)
      .then(getCoordinates)
      .catch((error) => {
        alert("Ops! Couldn't find the city you searched.");
      });
  }
}
function searchPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiUrl = `${apiEndPoint}?lat=${lat}&lon=${lon}&units=${units}&cnt=6&appid=${apiKey}`;
  axios
    .get(apiUrl)
    .then(giveTemperature)
    .catch((error) => {
      alert("Ops! Couldn't find your location.");
    });
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(searchPosition);
}

// api
const apiKey = "6bf5993fd6f246de7b98dc6c43d6cd79";
const apiEndPoint = "https://api.openweathermap.org/data/2.5/forecast";

// dates

let now = new Date();

const tomorrow = new Date(now);

tomorrow.setDate(tomorrow.getDate() + 1);

let dayOne = document.querySelector("#next-1d");
dayOne.innerHTML = formatDate(tomorrow);

const twoDays = new Date(now);

twoDays.setDate(twoDays.getDate() + 2);

let dayTwo = document.querySelector("#next-2d");
dayTwo.innerHTML = formatDate(twoDays);

const threeDays = new Date(now);

threeDays.setDate(threeDays.getDate() + 3);

let dayThree = document.querySelector("#next-3d");
dayThree.innerHTML = formatDate(threeDays);

const fourDays = new Date(now);

fourDays.setDate(fourDays.getDate() + 4);

let dayFour = document.querySelector("#next-4d");
dayFour.innerHTML = formatDate(fourDays);

const fiveDays = new Date(now);

fiveDays.setDate(fiveDays.getDate() + 5);

let dayFive = document.querySelector("#next-5d");
dayFive.innerHTML = formatDate(fiveDays);

// temperatures

let todayCelsiusTemp = null;
let todayFeelsCelsiusTemp = null;
let next1DayCelsiusMaxTemp = null;
let next1DayCelsiusMinTemp = null;
let next2DayCelsiusMaxTemp = null;
let next2DayCelsiusMinTemp = null;
let next3DayCelsiusMaxTemp = null;
let next3DayCelsiusMinTemp = null;
let next4DayCelsiusMaxTemp = null;
let next4DayCelsiusMinTemp = null;
let next5DayCelsiusMaxTemp = null;
let next5DayCelsiusMinTemp = null;

// event listeners

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", searchCity);

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", getLocation);

let today = document.querySelector("#current-date");
today.innerHTML = formatDateTime(now);

let celsiusButton = document.querySelector("#celsius");
celsiusButton.addEventListener("click", convertToC);

let farenheitLink = document.querySelector("#farenheit");
farenheitLink.addEventListener("click", convertToF);
