(()=>{"use strict";const e=document.querySelector(".date");function t(){let t=localStorage.getItem("language"),n=(new Date).toLocaleDateString(t,{weekday:"long",month:"long",day:"numeric"});e.textContent=n.charAt(0).toUpperCase()+n.slice(1)}const n=document.querySelector(".greeting"),o=document.querySelector(".name"),a={ru:["Доброе утро","Добрый день","Добрый вечер","Спокойной ночи"],en:["Good morning","Good afternoon"," Good evening","Good night"]};const r=document.querySelector(".quote"),c=document.querySelector(".author");async function s(){let e=localStorage.getItem("language");const t=await fetch("./quote.json"),n=await t.json();"ru-RU"===e||""===e||" "===e?function(){const e=Math.floor(Math.random()*n.ru.length);r.textContent=n.ru[e].text,c.textContent=n.ru[e].author}():function(){const e=Math.floor(Math.random()*n.en.length);r.textContent=n.en[e].text,c.textContent=n.en[e].author}()}document.querySelector(".change-quote").addEventListener("click",(()=>{s()}));const l=document.querySelector(".weather-icon"),u=document.querySelector(".temperature"),i=document.querySelector(".weather-description"),d=document.querySelector(".city"),m=document.querySelector(".wind-speed"),g=document.querySelector(".humidity"),y=document.querySelector(".weather-error");async function S(e){let t=localStorage.getItem("language");const n=`https://api.openweathermap.org/data/2.5/weather?q=${e}&lang=${t}&appid=fd3f37c32cd59bd6c44f880d911b0991&units=metric`,o=await fetch(n),a=await o.json();l.className="weather-icon owf",d.value=e,localStorage.setItem("currentCity",d.value),d.value.match(/[0-9]/)||""===d.value?(y.textContent="ru-RU"===t?`Ошибка! Город ${d.value} не найден`:`Error! City ${d.value} not found`,u.textContent="",i.textContent="",m.textContent="",g.textContent=""):(l.classList.add(`owf-${a.weather[0].id}`),u.textContent=`${Math.floor(a.main.temp)}°C`,i.textContent=`${a.weather[0].description}`,m.textContent="ru-RU"===t?`Скорость ветра: ${Math.floor(a.wind.speed)} м/с`:`Wind speed: ${Math.floor(a.wind.speed)} m/s`,g.textContent="ru-RU"===t?`Влажность: ${a.main.humidity}%`:`Humidity: ${a.main.humidity}%`,y.textContent="")}const h=[{title:"Aqua Caelestis",src:"./assets/sounds/Aqua Caelestis.mp3",duration:"00:39"},{title:"Ennio Morricone",src:"./assets/sounds/Ennio Morricone.mp3",duration:"03:50"},{title:"River Flows In You",src:"./assets/sounds/River Flows In You.mp3",duration:"03:50"},{title:"Summer Wind",src:"./assets/sounds/Summer Wind.mp3",duration:"03:50"}],p=document.querySelector(".translate__btn_ru"),v=document.querySelector(".translate__btn_en"),f=document.querySelector(".city");document.addEventListener("DOMContentLoaded",(()=>{localStorage.getItem("language")||localStorage.setItem("language","ru-RU"),function(){const e=document.querySelector(".time");!function o(){const r=(new Date).toLocaleTimeString().replace(/:/g," : ");e.textContent=r,t(),function(){const e=(new Date).getHours();"ru-RU"===localStorage.getItem("language")?n.textContent=e>=6&&e<12?a.ru[0]:e>=12&&e<18?a.ru[1]:e>=18&&e<24?a.ru[2]:a.ru[3]:n.textContent=e>=6&&e<12?a.en[0]:e>=12&&e<18?a.en[1]:e>=18&&e<24?a.en[2]:a.en[3]}(),setTimeout(o,1e3)}()}(),localStorage.getItem("name")&&(o.value=`${localStorage.getItem("name")}`),o.addEventListener("input",(()=>{localStorage.setItem("name",o.value)})),function(){const e=document.querySelector("body"),t=document.querySelector(".slide-prev"),n=document.querySelector(".slide-next");let o;function a(){const t=function(){const e=(new Date).getHours();return e>=6&&e<12?"morning":e>=12&&e<18?"afternoon":e>=18&&e<24?"evening":"night"}();o=o<10?`0${o}`:o;const n=new Image;n.addEventListener("load",(()=>{e.style.backgroundImage=`url('https://raw.githubusercontent.com/Maxxx1mHR/stage1-tasks/assets/images/${t}/${o}.jpg')`})),n.src=`https://raw.githubusercontent.com/Maxxx1mHR/stage1-tasks/assets/images/${t}/${o}.jpg`}o=Math.floor(20*Math.random())+1,a(),n.addEventListener("click",(()=>{o=+o+1,o>20&&(o=1),a()})),t.addEventListener("click",(()=>{o=+o-1,o<1&&(o=20),a()}))}(),s(),localStorage.getItem("currentCity")?S(localStorage.getItem("currentCity")):S("Минск"),d.addEventListener("change",(()=>{S(d.value)})),function(){const e=document.querySelector(".play"),t=document.querySelector(".play-prev"),n=document.querySelector(".play-next"),o=new Audio;let a=0;function r(){o.src=h[a].src,o.currentTime=0,o.play()}e.addEventListener("click",(()=>{e.classList.toggle("pause"),e.classList.contains("pause")?(r(),l(),u()):o.pause()})),t.addEventListener("click",(()=>{a-=1,a<0&&(a=h.length-1),r(),e.classList.add("pause"),l(),u()})),n.addEventListener("click",(()=>{a+=1,a>h.length-1&&(a=0),r(),e.classList.add("pause"),l(),u()}));const c=document.querySelector(".play-list");h.forEach((e=>{const t=document.createElement("li");t.classList.add("play-item"),t.textContent=e.title,c.append(t)}));const s=document.querySelectorAll(".play-item");function l(){s.forEach((e=>{e.classList.remove("item-active")}))}function u(){s[a].classList.add("item-active")}l()}(),function(){"ru-RU"!==localStorage.getItem("language")&&(p.classList.remove("translate_active"),v.classList.add("translate_active")),p.addEventListener("click",(()=>{e()}));const e=()=>{localStorage.setItem("language","ru-RU"),v.classList.remove("translate_active"),p.classList.add("translate_active"),S(f.value),t(),s()};v.addEventListener("click",(()=>{n()}));const n=()=>{localStorage.setItem("language","en-US"),v.classList.add("translate_active"),p.classList.remove("translate_active"),S(f.value),t(),s()}}()}))})();