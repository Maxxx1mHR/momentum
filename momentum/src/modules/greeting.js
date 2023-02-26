//Greeting
const greeting = document.querySelector('.greeting');
const userName = document.querySelector('.name');
// const translateButtonRu = document.querySelector('.translate__btn_ru');
// const translateButtonEn = document.querySelector('.translate__btn_en');

const greetingTranslation = {
    ru: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Спокойной ночи'],
    en: ['Good morning', 'Good afternoon', ' Good evening', 'Good night']
}
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

// translateButtonRu.addEventListener('click', () => {
//     translateToRussianLanguage();
//  });

//  const translateToRussianLanguage = () => {
//     localStorage.setItem('language', 'ru-RU');
//     translateButtonEn.classList.remove('translate_active');
//     translateButtonRu.classList.add('translate_active');
//  }

// translateButtonEn.addEventListener('click', () => {
//     translateToEnglishLanguage();
// });

// const translateToEnglishLanguage = () => {
//     localStorage.setItem('language', 'en-US');
//     translateButtonEn.classList.add('translate_active');
//     translateButtonRu.classList.remove('translate_active');
// } 


function showGreeting() { 
    const currentDate = new Date();
    const hours = currentDate.getHours();

    if (localStorage.getItem('language') === 'ru-RU') {
        if (hours >= 6 && hours < 12) {
            greeting.textContent = greetingTranslation.ru[0];
        } else if (hours >= 12 && hours < 18) {
            greeting.textContent = greetingTranslation.ru[1];
        } else if (hours >= 18 && hours < 24) {
            greeting.textContent = greetingTranslation.ru[2];
        } else {
            greeting.textContent = greetingTranslation.ru[3];
        }
    } else {
        if (hours >= 6 && hours < 12) {
            greeting.textContent = greetingTranslation.en[0];
        } else if (hours >= 12 && hours < 18) {
            greeting.textContent = greetingTranslation.en[1];
        } else if (hours >= 18 && hours < 24) {
            greeting.textContent = greetingTranslation.en[2];
        } else {
            greeting.textContent = greetingTranslation.en[3];
        }
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
