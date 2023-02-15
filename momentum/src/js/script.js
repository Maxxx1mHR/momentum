'use strict';
import {time} from './modules/time';
import {setName} from './modules/greeting';
import slider from './modules/slider';
import {getQuotes} from './modules/quote';
import weather from './modules/weather';
import player from './modules/player';


document.addEventListener('DOMContentLoaded', () => { 

    time();
    setName();
    slider();
    getQuotes();
    weather();
    



});