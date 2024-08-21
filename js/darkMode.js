//Dark mode
// I had a dream that Matt asked me for this feature so we did it in real life lol.
// 'Turns the lights off' on the website, leaving a visitor to navigate only with a flashlight.
// Clicking anywhere exits dark mode.
// Will work with touch and drag on mobile screens as well in theory, however on small viewport widths the dark mode menu option is hidden.

function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function trackMovement(event) {
    const rootElement = document.documentElement;

    if (isMobileDevice()) {
        const touch = event.touches[0] || event.changedTouches[0];
        rootElement.style.setProperty('--cursorXPos', `${touch.clientX}px`);
        rootElement.style.setProperty('--cursorYPos', `${touch.clientY}px`);
    } else {
        rootElement.style.setProperty('--cursorXPos', `${event.clientX}px`);
        rootElement.style.setProperty('--cursorYPos', `${event.clientY}px`);
    }
}

function toggleFlashlight() {
    const rootElement = document.documentElement;
    rootElement.classList.toggle('flashlight-on');
}

document.addEventListener(isMobileDevice() ? 'touchmove' : 'mousemove', trackMovement);

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', toggleFlashlight);

document.addEventListener('click', function (event) {
    const rootElement = document.documentElement;
    if (event.target !== toggleButton && !toggleButton.contains(event.target)) {
        rootElement.classList.remove('flashlight-on');
        playClickSound();
    }
  });
  
  function playClickSound() {
    const clickSound = new Audio('assets/click.mp3');
  clickSound.play();
  }
