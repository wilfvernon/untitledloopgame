const notesByKey = {
  q: 35,
  w: 36,
  e: 38,
  r: 40,
  t: 41,
  y: 43,
  u: 45,
  i: 47,
  o: 48,
  a: 48,
  s: 50,
  d: 52,
  f: 53,
  g: 55,
  h: 57,
  j: 59,
  k: 60
};

function createNote(cID, note_key, velocity, volume, delay) {
  return {
    cID: cID,
    note_key: note_key,
    velocity: velocity,
    volume: volume,
    delay: delay
  };
}

function saveNote(note, beatIndex) {
  if (currentLoop.notes[beatIndex]) {
    currentLoop.notes[beatIndex].push(note);
  } else {
    currentLoop.notes[beatIndex] = [note];
  }

  const mainBody = {
    loopId: currentLoop.id,
    note: note,
    beatIndex: beatIndex
  };

  const content = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(mainBody)
  };
  fetch(NOTES_URL, content);
}

let cID = 0;
let delay = 1;
let volume = 157;
let velocity = 32;

const timeEvent = {};

document.body.addEventListener("keydown", e => {
  if (notesByKey[e.key]) {
    startNote(cID, notesByKey[e.key], velocity, volume, e.key);
  }
});

document.body.addEventListener("keyup", e => {
  if (notesByKey[e.key]) {
    endNote(notesByKey[e.key], e.key);
  }
});

function playNotes(notes) {
  notes.forEach(note => {
    MIDI.setVolume(note.cID, note.volume);
    MIDI.noteOn(note.cID, note.note_key, note.velocity, 0);
    MIDI.noteOff(note.cID, note.note_key, note.delay);
  });
}

<<<<<<< HEAD
function renderNote(cID, noteKey, velocity, volume, delay) {
  const note = createNote(cID, noteKey, velocity, volume, delay);
  playNotes([note]);
  // saveNote(note);
=======
function startNote(cID, noteKey, velocity, volume, keyInput) {
  if (!timeEvent[keyInput]) {
    timeEvent[keyInput] = { time: Date.now(), cID: cID, index: beatIndex };
    MIDI.setVolume(cID, volume);
    MIDI.noteOn(cID, noteKey, velocity, 0);
  }
>>>>>>> 68978f7aa1ec6fd6779a0126a74db0ebe90fcafb
}

let isRecording = true;

function endNote(noteKey, input) {
  if (timeEvent[input]) {
    MIDI.noteOff(timeEvent[input].cID, noteKey, 0);
    delay = (Date.now() - timeEvent[input].time) / 1000.0;
    if (isRecording) {
      const note = createNote(
        timeEvent[input].cID,
        noteKey,
        velocity,
        volume,
        delay
      );
      saveNote(note, timeEvent[input].index);
    }
    timeEvent[input] = null;
  }
}

document.body.addEventListener("mousewheel", e => {
  // delay += +e.deltaY / 1000;
  // if (delay > 5) {
  //   delay = 5;
  // }
  // if (delay < 0.2) {
  //   delay = 0.2;
  // }

  volume += parseInt(e.deltaY);

  if (volume > 512) {
    volume = 512;
  }
  if (volume < 32) {
    volume = 32;
  }
  console.log(volume);
});

// function renderNote(cID, noteKey, velocity, volume, delay) {
//   const note = createNote(cID, noteKey, velocity, volume, delay);
//   playNotes([note]);
//   //saveNote(note);
// }
