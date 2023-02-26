const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');

async function getWeather(selector) {
    let languagePage = localStorage.getItem('language');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${selector}&lang=${languagePage}&appid=fd3f37c32cd59bd6c44f880d911b0991&units=metric`;

    const respone = await fetch(url);
    const data = await respone.json();
    weatherIcon.className = 'weather-icon owf';

    city.value = selector;
    
    localStorage.setItem('currentCity', city.value);


    if (!city.value.match(/[0-9]/) && city.value !== '') {         
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.floor(data.main.temp)}°C`;
        weatherDescription.textContent = `${data.weather[0].description}`;
        languagePage === 'ru' ? (
            wind.textContent = `Скорость ветра: ${Math.floor(data.wind.speed)} м/с`) : 
            (wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`);
        languagePage === 'ru' ? (
            humidity.textContent = `Влажность: ${data.main.humidity}%`) : 
            (humidity.textContent = `Humidity: ${data.main.humidity}%`);
        weatherError.textContent = '';
    } else {
        languagePage === 'ru' ? (
            weatherError.textContent = `Ошибка! Город ${city.value} не найден`) :
            (weatherError.textContent = `Error! City ${city.value} not found`)
        temperature.textContent = '';
        weatherDescription.textContent = '';
        wind.textContent = '';
        humidity.textContent = '' ;
    }
}

function weather() {
    localStorage.getItem('currentCity') ? getWeather(localStorage.getItem('currentCity')) : getWeather('Минск');
    // getWeather('Минск');
    city.addEventListener('change', () => {
        getWeather(city.value);
    });

}

export default weather;

export {getWeather};