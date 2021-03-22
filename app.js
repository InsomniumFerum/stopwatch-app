"use strict";

// Variables
const counter = document.getElementById("counter");
const start = document.querySelector(".start");
const stp = document.querySelector(".stop");
const pause = document.querySelector(".pause");

let sec = document.getElementById("sec");
let splitsec = document.getElementById("splitsec");

let saniye = "00";
let salise = "00";
let Interval;

// Arrow Function in order to start stopwatch
const startCounter = () => {
  Interval = setInterval(() => {
    salise++;
    if (salise < 9) splitsec.textContent = "0" + salise;

    if (salise > 9) splitsec.textContent = salise;

    if (salise > 99) {
      saniye++;
      sec.textContent = "0" + saniye;
      salise = "0";
      splitsec.textContent = "0" + salise;
    }
  }, 10);
};

// Clear interval arrow function
const pauseCounter = () => {
  clearInterval(Interval);
};

// Reset Counter arrow function
const deleteCounter = () => {
  clearInterval(Interval);
  salise = "00";
  splitsec.textContent = salise;
  saniye = "00";
  sec.textContent = saniye;
};

// EventListeners
start.addEventListener("click", startCounter);
pause.addEventListener("click", pauseCounter);
stp.addEventListener("click", deleteCounter);
