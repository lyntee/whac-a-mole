const boxes = document.querySelectorAll(".box");
const timer = document.querySelector("#time-left");
const score = document.querySelector("#score");
let scoreCounter = 0;
let timerCounter = 60;
let timerId;
let moleId;
// or can be => let moleId = null;

function randomBox() {
  //remove any box with the mole 
  boxes.forEach((elem) => {
    elem.classList.remove("mole");
  });
  // create a random id between 0 to 8
  const randomId = Math.floor(Math.random() * 9);
  boxes[randomId].classList.add("mole");
}

function moveMole() {
  moleId = setInterval(randomBox, 500);
  timerId = setInterval(timeCountdown, 1000);
}

boxes.forEach((elem) => {
  elem.addEventListener("click", hitMole);
});

function hitMole() {
  if (this.classList.contains("mole")) {
    scoreCounter++;
    score.textContent = scoreCounter;
  }
}

function timeCountdown() {
  timerCounter--;
  timer.textContent = timerCounter;
  if (timerCounter === 0) {
    clearInterval(timerId);
    clearInterval(moleId);
    boxes.forEach((elem) => {
      elem.removeEventListener("click", hitMole);
    });
    console.log("game over");
  }
}

moveMole();