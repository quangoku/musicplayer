const AUDIO = document.getElementById("audio");
const BUTTON = document.getElementById("button");
var check = 0;
let current = 1;
const total = 2;
function play_pause() {
  if (!check) {
    check = 1;
    AUDIO.play();
    BUTTON.style.animation = "spin 5s linear infinite";
  } else {
    check = 0;
    AUDIO.pause();
    BUTTON.style.animation = "";
  }
}
function next() {
  if (current == total) {
    current = 1;
  } else {
    current++;
  }
  AUDIO.src = `songs/${current}.MP3`;
  AUDIO.play();
}
function prev() {
  if (current == 1) {
    current = total;
  } else {
    current--;
  }
  AUDIO.src = `songs/${current}.MP3`;
  AUDIO.play();
}

function change_mode() {
  document.body.classList.toggle("dark_mode");
}
