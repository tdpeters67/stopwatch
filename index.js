const timeDisplay = document.querySelector("#timeDisplay")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resetBtn = document.querySelector("#resetBtn")

const timerBtns = document.querySelectorAll(".timerBtn")

let startTime = 0
let elapsedTime = 0
let currentTime = 0
let paused = true
let intervalId;
let hrs = 0
let mins = 0
let secs = 0
