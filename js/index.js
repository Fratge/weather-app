import { apiKey } from './apiKey.js';

let cityInput = document.getElementById('cityInput');
let button = document.getElementById('button');

const cityName = document.getElementById('cityName');
const actualTemp = document.getElementById('actualTemp');
const maxTemp = document.getElementById('maxTemp');
const minTemp = document.getElementById('minTemp');
const humidity = document.getElementById('humidity');
const seaLevel = document.getElementById('seaLevel');
const description = document.getElementById('description');
const main = document.getElementById('main');
const wind = document.getElementById('wind');
const feelsLike = document.getElementById('feelsLike');

getWeatherByName();

function getWeatherByName(city){
    city = city ? city : 'Paris';
    const result = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        changeData(data);
    })
}

const changeData = (data) =>{
    cityName.innerHTML = data.name;
    actualTemp.innerHTML = data.main.temp + '°';
    minTemp.innerHTML = data.main.temp_min;
    maxTemp.innerHTML = data.main.temp_max
    humidity.innerHTML = data.main.humidity + ' %';
    seaLevel.innerHTML = data.main.sea_level;
    main.innerHTML = data.weather[0].main;
    wind.innerHTML = data.wind.speed + ' m/s';
    feelsLike.innerHTML = data.main.feels_like + ' °';
    seaLevel.innerHTML = data.main.sea_level + ' m';
}

button.addEventListener('click', function(){
    const cityName = cityInput.value;
    getWeatherByName(cityName);
})
