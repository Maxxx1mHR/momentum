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
            removeActiveClassFromPlayItem();
            addActiveClassToPlayItem()
        } else {
            pauseAudio();
        }
    });

    function playPrev() {
        playNum -= 1;
        if (playNum < 0) {
            playNum = playList.length - 1;
        } 
        playAudio();
        playBtn.classList.add('pause');
        
    }

    playPrevBtn.addEventListener('click', () => {
        playPrev();
        removeActiveClassFromPlayItem();
        addActiveClassToPlayItem()
    });

    function playNext() {
        playNum += 1;
        if (playNum > playList.length - 1) {
            playNum = 0;
        }
        playAudio();
        playBtn.classList.add('pause');
    }

    playNextBtn.addEventListener('click', () => {
        playNext();
        removeActiveClassFromPlayItem();
        addActiveClassToPlayItem()
    })

    //Вывод песен на страницу
    const playListContainer = document.querySelector('.play-list');
    playList.forEach(el => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.textContent = el.title;
        playListContainer.append(li);
    });

    const playItem = document.querySelectorAll('.play-item');
    
    function removeActiveClassFromPlayItem() {
        playItem.forEach(item => {
            item.classList.remove('item-active');
        });
    }
    removeActiveClassFromPlayItem();

    function addActiveClassToPlayItem() {
        playItem[playNum].classList.add('item-active');
    }


}

export default player; 