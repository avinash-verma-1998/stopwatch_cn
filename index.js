// dom elements
const time = document.querySelector(".time");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
//timer variables
let seconds = 0;
let minutes = 0;
let interval = 0;

//timer functions
function resetTimer() {
  seconds = 0;
  minutes = 0;
  time.innerHTML = "00:00";
  clearInterval(interval);
}

function startTimer() {
  interval = setInterval(updateTime, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function updateTime() {
  let secondText = "00";
  let minutesText = "00";
  seconds += 1;
  if (seconds < 60) {
    secondText = ("0" + seconds).slice(-2);
  } else {
    minutes += 1;
    seconds = 0;
  }
  minutesText = ("0" + minutes).slice(-2);
  time.innerHTML = `${minutesText}:${secondText}`;
}
//eventListeners
start.addEventListener("click", startTimer);
reset.addEventListener("click", resetTimer);
stop.addEventListener("click", stopTimer);
