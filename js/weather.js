const API_KEY = "85b975220778a9e92a686174be45babe";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const city = document.querySelector("#weather span:last-child");

      weather.innerText = `날씨상태 : ${data.weather[0].main}`;
      temp.innerText = `온도: ${data.main.temp}ºC`;
      city.innerText = `지역명 : ${data.name}`;
    });
}

function onGeoError() {
  alert("can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
