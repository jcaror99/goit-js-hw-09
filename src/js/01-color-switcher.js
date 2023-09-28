const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = () => {
  body.style.backgroundColor = getRandomHexColor();
};

const changeColor = () => {
  bodyColor();
  startButton.disabled = true;
  timerId = setInterval(bodyColor, 1000);
};

const stopColor = () => {
  clearInterval(timerId);
  startButton.disabled = false;
};

startButton.addEventListener('click', changeColor);
stopButton.addEventListener('click', stopColor);
