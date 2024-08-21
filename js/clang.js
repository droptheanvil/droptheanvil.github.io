// Clang
// Sound effect.

var heading = document.getElementById("clang-heading");

heading.addEventListener("click", function () {
    const clangSound = new Audio('assets/clang.mp3');
    clangSound.play();
});
