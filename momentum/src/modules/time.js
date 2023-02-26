import {showDate} from './date';
import {showGreeting} from './greeting';

// let languagePage = localStorage.getItem('language');

function time () {
    const time = document.querySelector('.time');
   
    //Установка времени
    function showTime() {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString().replace(/:/g, ' : ');
    
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
    }

    showTime();

}


export {time};