
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=fd3f37c32cd59bd6c44f880d911b0991&units=metric`;
    const respone = await fetch(url);
    const data = await respone.json();
    console.log(data);
}

getWeather();