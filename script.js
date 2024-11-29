//generating new bubbles on every refresh
function makeBubble() {
  var clutter = " ";
  for (var i = 1; i <= 133; i++) {
    let num = Math.floor(Math.random() * 10);

    clutter += `<div id="bubbleNum" class="bubble" >${num}</div>`;
  }
  document.getElementById("pbot").innerHTML = clutter;
}
makeBubble();

function GameOver() {
  return `<h1 id="over">Game over: ${score}</h1>`;
}

//Timer
var time = 60;
function setTimer() {
  var timer = document.querySelector("#timer");
  setInterval(() => {
    time--;
    if (time >= 0) {
      timer.textContent = time;
    } else {
      clearInterval(timer);
      document.querySelector("#pbot").innerHTML = GameOver();
    }
  }, 1000);
}
setTimer();

//generating new Hit value
var HitVal = 0;
function newHit() {
  HitVal = Math.floor(Math.random() * 10);
  document.getElementById("hitCount").textContent = HitVal;
}
newHit();

//increasing score
var score = 0;
function Score() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

//add event listener to parent div
document.querySelector("#pbot").addEventListener("click", (dets) => {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === HitVal) {
    Score();
    makeBubble();
    newHit();
  }
});
