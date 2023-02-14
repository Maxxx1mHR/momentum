function weather() {
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const city = document.querySelector('.city');
    const wind = document.querySelector('.wind-speed');
    const humidity = document.querySelector('.humidity');
    const weatherError = document.querySelector('.weather-error');
    
    async function getWeather(selector) {
        console.log(`${selector}`);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${selector}&lang=ru&appid=fd3f37c32cd59bd6c44f880d911b0991&units=metric`;
        const respone = await fetch(url);
        const data = await respone.json();
        weatherIcon.className = 'weather-icon owf';
        city.value = selector;
        if (city.value == data.name && city.value != /D/g) {
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);
            temperature.textContent = `${Math.floor(data.main.temp)}°C`;
            weatherDescription.textContent = `${data.weather[0].description}`;
            wind.textContent = `Скорость ветра: ${Math.floor(data.wind.speed)} м/с`;
            humidity.textContent = `Влажность: ${data.main.humidity}%`;
            weatherError.textContent = '';
        } else {
            weatherError.textContent = `Ошибка! Город ${city.value} не найден`;
            temperature.textContent = '';
            weatherDescription.textContent = '';
            wind.textContent = '';
            humidity.textContent = '' ;
        }
    }
    getWeather('Минск');
    city.addEventListener('change', () => {
        getWeather(city.value);
    });

   
}

export default weather;