//Greeting
const greeting = document.querySelector('.greeting');
const userName = document.querySelector('.name');


//Получение времени суток
function getTimeOfDay() {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    if (hours >= 6 && hours < 12) {
        return `morning`;
    } else if (hours >= 12 && hours < 18) {
        return `afternoon`;
    } else if (hours >= 18 && hours < 24) {
        return `evening`;
    } else {
        return `night`;
    }
}


//Вывод приветсвия
function showGreeting() { 
    const currentDate = new Date();
    const hours = currentDate.getHours();
    if (hours >= 6 && hours < 12) {
        greeting.textContent = `Доброе утро`;
    } else if (hours >= 12 && hours < 18) {
        greeting.textContent = `Добрый день`;
    } else if (hours >= 18 && hours < 24) {
        greeting.textContent = `Добрый вечер`;
    } else {
        greeting.textContent = 'Спокойной ночи';
    }
}

//Установка имени пользователеем
function setName() {
    if (localStorage.getItem('name')) {
        userName.value = `${localStorage.getItem('name')}`;
    }
    userName.addEventListener('input', () => {
       localStorage.setItem('name', userName.value);
    });
}

export {showGreeting, setName, getTimeOfDay};
