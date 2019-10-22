const cursor = document.querySelector("#cursor");

let beatIndex = 0;
let beatInterval = 0;

function startLooper() {
  startTickLoop();

  resetCursorAnimation();
  renderMajorTicks(currentLoop.bars);
}

function startTickLoop() {
  const int = setInterval(e => {
    if (currentLoop.notes[beatIndex]) playNotes(currentLoop.notes[beatIndex]);
    beatIndex++;
    // if (beatIndex % loop.beatsPerBar === 0) playNote(createNote(3, 48, 127, 127));
    if (beatIndex === currentLoop.notes.length) {
      beatIndex = 0;
      resetCursorAnimation();
    }
  }, currentLoop.beatsPerTempo);
}

function resetCursorAnimation() {
  const steps = 128;
  let step = 1;

  const animationDuration =
    currentLoop.bars * currentLoop.beatsPerBar * currentLoop.beatsPerTempo;
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
