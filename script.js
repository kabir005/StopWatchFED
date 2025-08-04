let time = 0; // time in seconds
let running = false; // is stopwatch running?
let timer; // will hold setInterval

let display = document.getElementById("display");
let startBtn = document.getElementById("startBtn");
let lapBtn = document.getElementById("lapBtn");
let laps = document.getElementById("laps");

function showTime() {
  let mins = Math.floor(time / 60);
  let secs = time % 60;

  let show = String(mins).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
  display.innerText = show;
}

startBtn.onclick = function () {
  if (!running) {
    running = true;
    startBtn.innerText = "Stop";
    startBtn.style.background = "red";
    lapBtn.innerText = "Lap";

    timer = setInterval(function () {
      time++;
      showTime();
    }, 1000);
  } else {
    running = false;
    clearInterval(timer);
    startBtn.innerText = "Start";
    startBtn.style.background = "";
    lapBtn.innerText = "Reset";
  }
};

lapBtn.onclick = function () {
  if (running) {
    let item = document.createElement("li");
    item.innerText = display.innerText;
    laps.prepend(item);
  } else {
    // Reset everything
    time = 0;
    showTime();
    laps.innerHTML = "";
  }
};
