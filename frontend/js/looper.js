const cursor = document.querySelector("#cursor");

let beatIndex = 0;

function startLooper() {
  startTickLoop();
  resetCursorAnimation();
  resetMajorTicks(currentLoop.bars);
}

function startTickLoop() {
  setInterval(e => {
    if (currentLoop.notes[beatIndex]) playNotes(currentLoop.notes[beatIndex]);
    beatIndex++;
    if (beatIndex % currentLoop.beatsPerBar === 0)
      console.log("tick", beatIndex / 128);
    if (beatIndex >= currentLoop.notes.length) {
      beatIndex = 0;
      resetCursorAnimation();
    }
  }, currentLoop.beatsPerTempo);
}

function resetCursorAnimation() {
  const max = currentLoop.notes.length;

  const elem = document.getElementById("cursor");
  const id = setInterval(e => {
    if ((beatIndex * 70) / max >= 70) {
      clearInterval(id);
    } else {
      elem.style.left = (beatIndex * 70) / max + "vw";
    }
  }, 15);
}

function resetMajorTicks(bars) {
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
