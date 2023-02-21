const translateButtonRu = document.querySelector('.translate__btn_ru');
const translateButtonEn = document.querySelector('.translate__btn_en');
import {getWeather} from './weather';
const city = document.querySelector('.city');


function changeLanguage() {

    if (localStorage.getItem('language') !== 'ru') {
        translateButtonRu.classList.remove('translate_active');
        translateButtonEn.classList.add('translate_active')
    }

    translateButtonRu.addEventListener('click', () => {
        translateToRussianLanguage();
     });
    
     const translateToRussianLanguage = () => {
        localStorage.setItem('language', 'ru');
        translateButtonEn.classList.remove('translate_active');
        translateButtonRu.classList.add('translate_active');
        getWeather(city.value);
     }
    
    translateButtonEn.addEventListener('click', () => {
        translateToEnglishLanguage();
    });
    
    const translateToEnglishLanguage = () => {
        localStorage.setItem('language', 'en');
        translateButtonEn.classList.add('translate_active');
        translateButtonRu.classList.remove('translate_active');
        getWeather(city.value);
    } 

}

export default changeLanguage;