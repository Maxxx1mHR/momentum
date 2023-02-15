import playList from "./playList";
function player() {


    const playBtn = document.querySelector('.play');
    const playPrevBtn = document.querySelector('.play-prev');
    const playNextBtn = document.querySelector('.play-next');
    const audio = new Audio();
    let playNum = 0;
    
    function playAudio() {
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
    }
    function pauseAudio() {
        audio.pause();
    }

    playBtn.addEventListener('click', () => {
        playBtn.classList.toggle('pause');
        if (playBtn.classList.contains('pause')) {
            playAudio();
        } else {
            pauseAudio();
        }
    });

    function playPrev() {
        playNum -= 1;
        if (playNum < 0) {
            playNum = playList.length - 1;
            // console.log(playNum);
            // console.log(playList[playNum].src);
        } 
        console.log('ELSE',playNum);
        console.log('ELSE',playList[playNum].src);
        playAudio();
    }


    playPrevBtn.addEventListener('click', () => {
        
        playPrev();
    });

    //Вывод песен на страницу
    const playListContainer = document.querySelector('.play-list');
    playList.forEach(el => {
        const li = document.createElement('li');
        li.classList.add('play-list');
        li.textContent = el.title;
        playListContainer.append(li);
    
    });

}

export default player; 