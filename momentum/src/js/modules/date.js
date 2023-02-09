
const date = document.querySelector('.date');

//Установка даты
function showDate() {
    const currentDate = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const modifyDate = currentDate.toLocaleDateString('ru-RU', options);
    //Первую букву делаем заглавной
    date.textContent = modifyDate.charAt(0).toUpperCase() + modifyDate.slice(1);
}


export {showDate};