document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElemento = document.querySelector(`div[data-key="${sound}"]`);

  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  if (keyElemento) {
    keyElemento.classList.add("active");

    setTimeout(() => {
      keyElemento.classList.remove("active");
    }, 300);
  }
}
