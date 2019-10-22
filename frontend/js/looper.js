const loop = {
  name: "untitled loop game",
  notes: [],
  beatsPerBar: 64,
  bars: 4,
  BPM: 90
};

const beatsPerTempo = 60000 / loop.BPM / loop.beatsPerBar;
loop.notes.length = loop.beatsPerBar * loop.bars;

const cursor = document.querySelector("#cursor");

let beatIndex = 0;
let beatInterval = 0;
const int = setInterval(e => {
  beatIndex++;

  if (loop.notes[beatIndex]) playNote(loop.notes[beatIndex]);
  if (beatIndex % loop.beatsPerBar === 0)
    if (beatIndex === loop.notes.length) {
      beatIndex = 0;
      resetCursorAnimation();
    }
}, beatsPerTempo);



function resetCursorAnimation() {
  const steps = 128;
  let step = 1;

  const animationDuration = loop.bars * loop.beatsPerBar * beatsPerTempo;
  const animationInterval = animationDuration / steps;
  const id = setInterval(frame, animationInterval);
  const elem = document.getElementById("cursor");

  function frame() {
    if (step == steps + 1) {
      clearInterval(id);
    } else {
      elem.style.left = (step * 70) / steps + "vw";
      step++;
    }
  }
}

function renderMajorTicks(bars) {
  for (let i = 0; i < bars; i++) {
    const tick = document.createElement("div");
    const looper = document.querySelector("#looper");
    tick.style = `height: 30vh;
    width: 2px;
    background: black;
    position: absolute;
    left: ${i * (70 / bars)}vw
  `;
    looper.append(tick);
  }
}

renderMajorTicks(loop.bars);
resetCursorAnimation();
