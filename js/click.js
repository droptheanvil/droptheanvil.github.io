// Click
// Sound effect.

var heading = document.getElementById("toggleButton");

heading.addEventListener("click", function () {
        const clickSound = new Audio('assets/click.mp3');
        clickSound.play();
});
