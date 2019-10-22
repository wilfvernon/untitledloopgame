const cursor = document.querySelector("#cursor");

let beatIndex = 0;
let beatInterval = 0;

function startLooper() {
  startTickLoop();
  resetCursorAnimation();
  renderMajorTicks(currentLoop.bars);
}

function startTickLoop() {
  setInterval(e => {
    if (currentLoop.notes[beatIndex]) playNotes(currentLoop.notes[beatIndex]);
    beatIndex++;
    // if (beatIndex % loop.beatsPerBar === 0) playNote(createNote(3, 48, 127, 127));
    if (beatIndex >= currentLoop.bars * currentLoop.beatsPerBar) {
      beatIndex = 0;
      resetCursorAnimation();
    }
  }, currentLoop.beatsPerTempo);
}

function resetCursorAnimation() {
  const steps = 256;
  let step = 1;

  const animationDuration =
    currentLoop.bars * currentLoop.beatsPerBar * currentLoop.beatsPerTempo;
  const animationInterval = animationDuration / steps;

  const elem = document.getElementById("cursor");
  const id = setInterval(e => {
    if (step >= steps + 1) {
      clearInterval(id);
    } else {
      elem.style.left = (step * 70) / steps + "vw";
      step++;
    }
  }, animationInterval);
}

function renderMajorTicks(bars) {
  const looper = document.querySelector("#looper");

  for (let i = 0; i < bars; i++) {
    const tick = document.createElement("div");
    tick.style = `height: 30vh;
    width: 2px;
    background: black;
    position: absolute;
    left: ${i * (70 / bars)}vw
  `;
    looper.append(tick);
  }
}
