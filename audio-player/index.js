const playlist = ['assets/audio/beyonce.mp3', 'assets/audio/dontstartnow.mp3'];
const thumbnails = ['./assets/img/lemonade.png', './assets/img/dontstartnow.png'];//paths for album covers and backgrounds
const songArtists = ['Beyonce', 'Dua Lipa'];//track artists
const songTitles = ["Don't Hurt Yourself", "Don't Start Now"];//track titles

const playPauseBtn = document.getElementById('playPause');
const stopBtn = document.getElementById('stop');
const previousBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const muteBtn = document.getElementById('mute');
const progressBar = document.getElementById('progressBar');
const currentTime = document.getElementById('currentTime');
const durationTime = document.getElementById('durationTime');
const volumeControl = document.getElementById('volumeControl');
const songArtist = document.getElementById('trackArtist');
const songTitle = document.getElementById('trackTitle');
const playerBox = document.getElementById('playerBox');

let playIndex = 0;
const audio = new Audio();
audio.src = playlist[playIndex];
audio.volume = 0.5;
volumeControl.value = audio.volume;
let lastAudioVolume = audio.volume;
songArtist.textContent = songArtists[playIndex];
songTitle.textContent = songTitles[playIndex];
playerBox.style.backgroundImage = `url('${thumbnails[playIndex]}')`;

function timeFormat(seconds) {
  let sec = `${seconds}`.padStart(2, "0");

  if (seconds < 10) return `0:${sec}`;

  const min = Math.floor(seconds / 60);
  
  sec = seconds - min * 60;
  sec = `${sec}`.padStart(2, "0");
  return `${min}:${sec}`;
}
function updateProgressValue() {
  progressBar.value = audio.currentTime;
  currentTime.textContent = timeFormat(Math.round(audio.currentTime));

  progressBar.max = audio.duration;
  durationTime.textContent = timeFormat(Math.round(audio.duration));
}
setInterval(updateProgressValue, 1000);

function playPauseAudio() {
  playPauseBtn.firstElementChild.classList.toggle("hide");
  playPauseBtn.lastElementChild.classList.toggle("hide");

  if (audio.paused) {
    audio.play();
    stopBtn.disabled = false;
  }
  else audio.pause();
}

function stopAudio() {
  if (!audio.paused) {
    playPauseBtn.firstElementChild.classList.remove("hide");
    playPauseBtn.lastElementChild.classList.add("hide");

    audio.pause();
    audio.currentTime = 0;
    progressBar.value = 0;
  }
  stopBtn.disabled = true;
}

function previousAudio() {

}

function nextAudio() {
  playIndex++;
  audio.src = playlist[playIndex];
  songArtist.textContent = songArtists[playIndex];
  songTitle.textContent = songTitles[playIndex];
  playerBox.style.backgroundImage = `url('${thumbnails[playIndex]}')`;
  playPauseAudio();
}

function changeProgressBar() {
  audio.currentTime = progressBar.value;
}

function changeVolume() {
  audio.volume = volumeControl.value;
}

function muteVolume() {
  muteBtn.firstElementChild.classList.toggle("hide");
  muteBtn.lastElementChild.classList.toggle("hide");

  audio.muted = !audio.muted;

  if (audio.muted) volumeControl.value = 0;
  else volumeControl.value = audio.volume;
}