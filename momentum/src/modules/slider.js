import {getTimeOfDay} from './greeting';

function slider() {
    const body = document.querySelector('body');
    const prev = document.querySelector('.slide-prev');
    const next = document.querySelector('.slide-next');
    let randomNum;


    //Генерация рандомного числа от 1 до 20
    function getRandomNum() {
        return Math.floor(Math.random() * 20) + 1;
    }
    randomNum = getRandomNum();

    //Установка рандомного bg по ссылке из репозитория
    function setBg() {
        const timeOfDay = getTimeOfDay();
        randomNum = (randomNum < 10) ? `0${randomNum}` : randomNum;

        const img = new Image();
        // `url('https://raw.githubusercontent.com/Maxxx1mHR/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg') center/cover, rgba(0, 0, 0, 0.5)`;
        img.addEventListener('load', () => {
            body.style.backgroundImage = `url('https://raw.githubusercontent.com/Maxxx1mHR/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg')`;
          });
          img.src = `https://raw.githubusercontent.com/Maxxx1mHR/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
    }

    setBg();

    function getSlideNext() {
        randomNum = +randomNum + 1;
        if (randomNum > 20) {
            randomNum = 1;
        }
        setBg();
    }

    function getSlidePrev() {
        randomNum = +randomNum - 1;
        if (randomNum < 1) {
            randomNum = 20;
        }
        setBg();
    }

    next.addEventListener('click', () => {
        getSlideNext();
    });

    prev.addEventListener('click', () => {
        getSlidePrev();
    });
     
}

export default slider;