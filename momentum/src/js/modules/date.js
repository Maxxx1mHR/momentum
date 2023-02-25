
const date = document.querySelector('.date');

//Установка даты
function showDate() {
    let languagePage = localStorage.getItem('language');

    const currentDate = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};

    const modifyDate = currentDate.toLocaleDateString(languagePage, options);
    //Первую букву делаем заглавной
    date.textContent = modifyDate.charAt(0).toUpperCase() + modifyDate.slice(1);
}


export {showDate};