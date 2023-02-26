'use strict';
import './sass/style.scss'


import {time} from './modules/time';
import {setName} from './modules/greeting';
import slider from './modules/slider';
import {getQuotes} from './modules/quote';
import weather from './modules/weather';
import player from './modules/player';
import changeLanguage from './modules/change-language';

document.addEventListener('DOMContentLoaded', () => { 

        
        if (!localStorage.getItem('language')) {
                localStorage.setItem('language', 'ru-RU');
        }

        time();
        setName();
        slider();
        getQuotes();
        weather();
        player();
        changeLanguage();
    
});