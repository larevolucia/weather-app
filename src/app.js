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

// search city or location and give temperature

function giveTemperature(response) {
  console.log(response);
  //change from empty state to result

  document.getElementById("empty-state").style.display = "none";
  document.getElementById("weather-today").style.display = "block";
  document.getElementById("forecast-5days").style.display = "block";

  // current date
  document.querySelector("#current-temp").innerHTML = `<strong>${Math.round(
    response.data.list[0].main.temp
  )}</strong>° C`;
  document.querySelector("#feel-temp").innerHTML = `Feels like ${Math.round(
    response.data.list[0].main.feels_like
  )}° C`;
  document.querySelector("#max-today").innerHTML = `${Math.ceil(
    response.data.list[0].main.temp_max
  )}° ↑`;
  document.querySelector("#min-today").innerHTML = `${Math.floor(
    response.data.list[0].main.temp_min
  )} ° ↓`;
  document.querySelector("#summary-today").innerHTML =
    response.data.list[0].weather[0].description;
  document.querySelector(
    "#rain-today"
  ).innerHTML = `<strong>Chance of rain</strong>: 
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

  document.getElementById(
    "icon-next-1d"
  ).src = `img/${response.data.list[1].weather[0].icon.slice(0, -1)}d.png`;
  document
    .querySelector("#icon-next-1d")
    .setAttribute("alt", response.data.list[1].weather[0].main);
  document.querySelector("#max-next-1d").innerHTML = `${Math.ceil(
    response.data.list[1].main.temp_max
  )}°`;
  document.querySelector("#min-next-1d").innerHTML = `${Math.floor(
    response.data.list[1].main.temp_min
  )} °`;
  document.querySelector(
    "#rain-next-1d"
  ).innerHTML = `<strong>Chance of rain</strong>: 
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

  document.getElementById(
    "icon-next-2d"
  ).src = `img/${response.data.list[2].weather[0].icon.slice(0, -1)}d.png`;
  document
    .querySelector("#icon-next-2d")
    .setAttribute("alt", response.data.list[2].weather[0].main);
  document.querySelector("#max-next-2d").innerHTML = `${Math.ceil(
    response.data.list[2].main.temp_max
  )}°`;
  document.querySelector("#min-next-2d").innerHTML = `${Math.floor(
    response.data.list[2].main.temp_min
  )} °`;
  document.querySelector(
    "#rain-next-2d"
  ).innerHTML = `<strong>Chance of rain</strong>: 
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

  document.getElementById(
    "icon-next-3d"
  ).src = `img/${response.data.list[3].weather[0].icon.slice(0, -1)}d.png`;
  document
    .querySelector("#icon-next-3d")
    .setAttribute("alt", response.data.list[3].weather[0].main);
  document.querySelector("#max-next-3d").innerHTML = `${Math.ceil(
    response.data.list[3].main.temp_max
  )}°`;
  document.querySelector("#min-next-3d").innerHTML = `${Math.floor(
    response.data.list[3].main.temp_min
  )} °`;
  document.querySelector(
    "#rain-next-3d"
  ).innerHTML = `<strong>Chance of rain</strong>: 
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

  document.getElementById(
    "icon-next-4d"
  ).src = `img/${response.data.list[4].weather[0].icon.slice(0, -1)}d.png`;
  document
    .querySelector("#icon-next-4d")
    .setAttribute("alt", response.data.list[4].weather[0].main);
  document.querySelector("#max-next-4d").innerHTML = `${Math.ceil(
    response.data.list[4].main.temp_max
  )}°`;
  document.querySelector("#min-next-4d").innerHTML = `${Math.floor(
    response.data.list[4].main.temp_min
  )} °`;
  document.querySelector(
    "#rain-next-4d"
  ).innerHTML = `<strong>Chance of rain</strong>: 
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

  document.getElementById(
    "icon-next-5d"
  ).src = `img/${response.data.list[5].weather[0].icon.slice(0, -1)}d.png`;
  document
    .querySelector("#icon-next-5d")
    .setAttribute("alt", response.data.list[5].weather[0].main);
  document.querySelector("#max-next-5d").innerHTML = `${Math.ceil(
    response.data.list[5].main.temp_max
  )}°`;
  document.querySelector("#min-next-5d").innerHTML = `${Math.floor(
    response.data.list[5].main.temp_min
  )} °`;
  document.querySelector(
    "#rain-next-5d"
  ).innerHTML = `<strong>Chance of rain</strong>: 
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
  console.log(response);
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
    console.log(apiUrl);
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
  console.log(apiUrl);
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

// event listeners

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", searchCity);

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", getLocation);

let today = document.querySelector("#current-date");
today.innerHTML = formatDateTime(now);
