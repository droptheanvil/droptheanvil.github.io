// Click
// Sound effect.

var heading = document.getElementById("toggleButton");
var audio = document.getElementById("myAudio2");

heading.addEventListener("click", function () {
    audio.play();
});