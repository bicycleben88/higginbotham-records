const letters = document.querySelectorAll(".letter");
const searchBar = document.querySelector(".search");
const results = document.querySelector(".results");
const records = [];

async function getRecords() {
  const response = await fetch("http://localhost:5000/api/records");
  const data = await response.json();
  await records.push(...data);
}

function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const letter = document.querySelector(`.letter[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  letter.classList.add("playing");
}

function removeClass(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

letters.forEach((letter) =>
  letter.addEventListener("transitionend", removeClass)
);
window.addEventListener("keydown", playAudio);

getRecords();
