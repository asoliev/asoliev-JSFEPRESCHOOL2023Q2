const audio = new Audio();

function mainActions() {
  function volumeActions() {
    const volumeControl = document.getElementById('volumeControl');
    const muteBtn = document.getElementById('mute');

    audio.volume = 0.25;
    volumeControl.value = audio.volume;
    volumeControl.title = audio.volume * 100;

    volumeControl.addEventListener('change', () => {
      audio.volume = volumeControl.value;
      volumeControl.title = audio.volume * 100;
    });

    muteBtn.addEventListener('click', () => {
      muteBtn.firstElementChild.classList.toggle("hide");
      muteBtn.lastElementChild.classList.toggle("hide");

      audio.muted = !audio.muted;

      if (audio.muted) volumeControl.value = 0;
      else volumeControl.value = audio.volume;
    });
  }
  volumeActions();

  function playProgressActions() {
    const progressBar = document.getElementById('progressBar');
    const currentTime = document.getElementById('currentTime');
    const durationTime = document.getElementById('durationTime');

    function formatTime(timeInSeconds) {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    function updateProgressBar() {
      progressBar.value = audio.currentTime;
      currentTime.textContent = formatTime(Math.round(audio.currentTime));
    
      progressBar.max = audio.duration;
      durationTime.textContent = formatTime(Math.round(audio.duration));
    }
    audio.addEventListener('timeupdate', updateProgressBar);

    progressBar.addEventListener('change', () => audio.currentTime = progressBar.value);
    progressBar.addEventListener('input', (e) => currentTime.textContent = formatTime(Math.round(e.target.value)));
  }
  playProgressActions();
}
mainActions();

function controlFunctions() {
  const stopBtn = document.getElementById('stop');
  function playAudio() {
    if (audio.paused) {
      audio.play();
      stopBtn.disabled = false;
    }
    else audio.pause();
  }

  function prevNext() {
    const songArtist = document.getElementById('trackArtist');
    const songTitle = document.getElementById('trackTitle');
    const trackCover = document.getElementById('trackCover');

    const previousBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let songIndex = 0;

    const data = [
      {
        title: "Don't Hurt Yourself",
        artist: 'Beyonce',
        src: 'assets/audio/beyonce.mp3',
        cover: './assets/img/lemonade.png'
      },
      {
        title: "Don't Start Now",
        artist: 'Dua Lipa',
        src: 'assets/audio/dontstartnow.mp3',
        cover: './assets/img/dontstartnow.png'
      }
    ];

    function updateSingInfo() {
      audio.src = data[songIndex].src;
      songArtist.textContent = data[songIndex].artist;
      songTitle.textContent = data[songIndex].title;
      trackCover.src = data[songIndex].cover;
      document.body.style.backgroundImage = `url('${data[songIndex].cover}')`;
    }
    updateSingInfo();


    previousBtn.addEventListener('click', () => {
      songIndex--;
      if (songIndex <= 0) songIndex = data.length-1;
      updateSingInfo();
      playAudio();
    });


    function nextSong() {
      songIndex++;
      if (songIndex > data.length-1) songIndex = 0;
      updateSingInfo();
      playAudio();
    }
    nextBtn.addEventListener('click', nextSong);

    audio.addEventListener('ended', nextSong);
  }
  prevNext();

  function playPause() {
    const playPauseBtn = document.getElementById('playPause');

    function playPauseAudio() {
      playPauseBtn.firstElementChild.classList.toggle("hide");
      playPauseBtn.lastElementChild.classList.toggle("hide");
      playAudio();
    }
    playPauseBtn.addEventListener('click', playPauseAudio);

    stopBtn.addEventListener('click', () => {
      if (!audio.paused) {
        playPauseBtn.firstElementChild.classList.remove("hide");
        playPauseBtn.lastElementChild.classList.add("hide");
    
        audio.pause();
        audio.currentTime = 0;
        progressBar.value = 0;
      }
      stopBtn.disabled = true;
    });
  }
  playPause();
}
controlFunctions();