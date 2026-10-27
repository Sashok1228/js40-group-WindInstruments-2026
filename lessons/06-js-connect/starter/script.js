// Готовая команда: ля первой октавы, 440 Гц. Разберём осциллятор на уроке 16.
function playA4() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.frequency.value = 440;
  osc.type = "sine";
  gain.gain.value = 0.12;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
  osc.stop(ctx.currentTime + 0.4);
}
let isPlaying = false
const playBtn = document.querySelector("#playBtn");
playBtn.addEventListener("click", function () {
  isPlaying = !isPlaying;
if (isPlaying) { 
  playBtn.style.background = "tomato";
  playBtn.textContent = "pause";
  status.textContent = "идет запись";
}else{
  playBtn.style.background = "#7c5cff";
  playBtn.textContent = "pause";
  status.textContent = "идет запись";
}
}
const status = document.querySelector("#status");
const toneBtn = document.querySelector("#toneBtn");
console.log(playBtn)

// TODO: найди #playBtn и #status, по клику меняй текст и цвет
// TODO: найди #toneBtn, по клику вызови playA4()

// Пример:
// const playBtn = document.querySelector("#playBtn");
// const toneBtn = document.querySelector("#toneBtn");
// const status = document.querySelector("#status");
