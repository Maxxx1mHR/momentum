const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeBtn = document.querySelector('.change-quote');

async function getQuotes() {  
    const quotes = '../quote.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    const randomNum = Math.floor(Math.random() * data.length);
    quote.textContent = data[randomNum].text;
    author.textContent = data[randomNum].author;
    }

changeBtn.addEventListener('click', () => {
    getQuotes();
});

export {getQuotes};