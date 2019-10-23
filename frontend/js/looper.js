const cursor = document.querySelector("#cursor");

let beatIndex = 0;
let tickLoopId = 0;
let cursorAnimationId = 0;

function stopLooper() {
  clearInterval(tickLoopId);
  clearInterval(cursorAnimationId);
  beatIndex = 0;
}

function startLooper() {
  startTickLoop();
  resetCursorAnimation();
  resetMajorTicks(currentLoop.bars);
  renderNotes();
}

function startTickLoop() {
  clearInterval(tickLoopId);

  tickLoopId = setInterval(e => {
    if (currentLoop.notes[beatIndex]) playNotes(currentLoop.notes[beatIndex]);
    beatIndex++;
    // if (beatIndex % currentLoop.beatsPerBar === 0)
    //   console.log("tick", beatIndex / 128);
    if (beatIndex >= currentLoop.notes.length) {
      beatIndex = 0;
      resetCursorAnimation();
    }
  }, currentLoop.beatsPerTempo);
}

function resetCursorAnimation() {
  clearInterval(cursorAnimationId);

  const max = currentLoop.notes.length;
  const elem = document.getElementById("cursor");
  cursorAnimationId = setInterval(e => {
    if ((beatIndex * 70) / max >= 70) {
      clearInterval(cursorAnimationId);
    } else {
      elem.style.left = (beatIndex * 70) / max + "vw";
    }
  }, 15);
}

function resetMajorTicks(bars) {
  const looper = document.querySelector("#looper");

  looper.innerHTML = "<div id='cursor'></div>";

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

function renderNotes() {
  const looper = document.querySelector("#looper");

  for (let i = 0; i < currentLoop.notes.length; i++) {
    if (currentLoop.notes[i]) {
      for (let j = 0; j < currentLoop.notes[i].length; j++) {
        note = currentLoop.notes[i][j];
        const tick = document.createElement("div");
        tick.style = `
                    height: 1vh;
                    width: ${((note.beatIndexOff - note.beatIndex) * 70) /
                      currentLoop.notes.length};
                    background: ${cIDtoColor[note.cID % 4]};
                    position: absolute;
                    left: ${i * (70 / currentLoop.notes.length)}vw;
                    bottom: ${note.cID + 5}vh;
                    `;
        looper.append(tick);
      }
    }
  }
}

const cIDtoColor = ["red", "orange", "yellow", "green"];
