//your JS code here. If required.
let stopBtn = document.getElementsByClassName("stop");
let audioBtn = document.getElementsByClassName("btn");

let audio;

for (let i = 0; i < audioBtn.length; i++) {
  audioBtn[i].addEventListener("click", function () {
    let sound = audioBtn[i].innerText;

    audio = new Audio("sounds/" + sound + ".mp3");
    audio.play();
  });
}

stopBtn[0].addEventListener("click", function () {
  audio.pause();
});