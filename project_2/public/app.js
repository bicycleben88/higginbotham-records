const letters = document.querySelectorAll(".letter");

function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const letter = document.querySelector(`.letter[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener("keydown", playAudio);
