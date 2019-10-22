

const beatsPerTempo = 60000 / currentLoop.BPM / currentLoop.beatsPerBar;
currentLoop.notes.length = currentLoop.beatsPerBar * currentLoop.bars;

const cursor = document.querySelector("#cursor");

let beatIndex = 0;
let beatInterval = 0;
const int = setInterval(e => {
  beatIndex++;

  if (currentLoop.notes[beatIndex]) playNote(currentLoop.notes[beatIndex]);
  //literally a metronome because why the fuck not
  // if (beatIndex % loop.beatsPerBar === 0) playNote(createNote(3, 48, 127, 127));
  if (beatIndex === currentLoop.notes.length) {
    beatIndex = 0;
    resetCursorAnimation();
  }
}, beatsPerTempo);

function resetCursorAnimation() {
  const steps = 128;
  let step = 1;

  const animationDuration = currentLoop.bars * currentLoop.beatsPerBar * beatsPerTempo;
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

renderMajorTicks(currentLoop.bars);
resetCursorAnimation();
