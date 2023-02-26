const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeBtn = document.querySelector('.change-quote');

async function getQuotes() {  

    let languagePage = localStorage.getItem('language');

    const quotes = './quote.json';
    const res = await fetch(quotes);
    const data = await res.json(); 

    languagePage === 'ru-RU' ? showRussianQuotes() : showEnglishQuotes();
    

    function showRussianQuotes() {
        const randomNum = Math.floor(Math.random() * data.ru.length);
        quote.textContent = data.ru[randomNum].text;
        author.textContent = data.ru[randomNum].author;
    }

    function showEnglishQuotes() {
        const randomNum = Math.floor(Math.random() * data.en.length);
        quote.textContent = data.en[randomNum].text;
        author.textContent = data.en[randomNum].author;
    }
}

changeBtn.addEventListener('click', () => {
    getQuotes();
});

export {getQuotes};