document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value;

  if (song !== "") {
    let songArray = song.split("");
    playComposition(songArray);
  }
});

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElemento = document.querySelector(`div[data-key="${sound}"]`);
  let body = document.body;

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElemento) {
    keyElemento.classList.add("active");
    body.style.backgroundColor = "rgba(128, 128, 128, 0.8)";

    setTimeout(() => {
      keyElemento.classList.remove("active");
    }, 300);

    setTimeout(() => {
      body.style.backgroundColor = "#333";
    }, 100);
  }
}

function playComposition(songArray) {
  let wait = 0;

  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);
    wait += 250;
  }
}
