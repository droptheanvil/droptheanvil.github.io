// Clang
// Sound effect.

var heading = document.getElementById("clang-heading");
var audio = document.getElementById("myAudio");

heading.addEventListener("click", function () {
    audio.play();
});