function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);
let timeId = null;
stopBtn.setAttribute('disabled', true);

function onStartBtn() {
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
  timeId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  
};

function onStopBtn() {
  clearInterval(timeId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
};
