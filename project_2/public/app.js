const letters = document.querySelectorAll(".letter");
const searchBar = document.querySelector(".search");
const results = document.querySelector(".results");
const records = [];

async function getRecords() {
  const response = await fetch(
    "https://higginbotham-records.herokuapp.com/api/records"
  );
  const data = await response.json();
  await records.push(...data);
}

function findResults(searchTerm, records) {
  return records.filter((record) => {
    const regex = new RegExp(searchTerm, "gi");
    return record.artist.match(regex) || record.albumTitle.match(regex);
  });
}

function displayResults() {
  const resultsArray = findResults(this.value, records);
  const htmlText = resultsArray
    .map((record) => {
      if (this.value === "") return;
      const regex = new RegExp(this.value, "gi");
      const artist = record.artist.replace(
        regex,
        `<span class="bg-danger">${this.value}</span>`
      );
      const album = record.albumTitle.replace(
        regex,
        `<span class="bg-danger">${this.value}</span>`
      );
      return `
        <li class="list-group-item"><span>${album} by ${artist}</span></li>
      `;
    })
    .join("");
  results.innerHTML = htmlText;
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
searchBar.addEventListener("change", displayResults);
searchBar.addEventListener("keyup", displayResults);

getRecords();
