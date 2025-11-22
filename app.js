let key = document.querySelectorAll(".key");

document.addEventListener("keydown", function (e) {
  let keyPressed = e.key.toUpperCase();
  key.forEach((key) => {
    if (key.innerText === keyPressed) {
      let audio = new Audio(`./sounds/${key.dataset.note}.mp3`);
      audio.play();
    }
  });
});
