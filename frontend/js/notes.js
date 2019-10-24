let currentOctave = 0;

const notesByKey = {
  z: 36,
  s: 37,
  x: 38,
  d: 39,
  c: 40,
  v: 41,
  g: 42,
  b: 43,
  h: 44,
  n: 45,
  j: 46,
  m: 47,
  ",": 48,
  y: 48,
  7: 49,
  u: 50,
  8: 51,
  i: 52,
  o: 53,
  0: 54,
  p: 55,
  "-": 56,
  "[": 57,
  "=": 58,
  "]": 59,
  "\\": 60
};

function octaveUp() {
  currentOctave++;
  for (const note in notesByKey) {
    notesByKey[note] += 12;
  }
}

function octaveDown() {
  currentOctave--;
  for (const note in notesByKey) {
    notesByKey[note] -= 12;
  }
}

function createNote(cID, note_key, velocity, volume, delay, recordingId) {
  return {
    cID: cID,
    note_key: note_key,
    velocity: velocity,
    volume: volume,
    delay: delay,
    recordingId: recordingId
  };
}

function saveNote(note, beatIndex, off) {
  const mainBody = {
    loopId: currentLoop.id,
    note: note,
    beatIndex: beatIndex,
    beatIndexOff: off
  };

  note["beat_index"] = beatIndex;
  note["beat_index_off"] = off;
  if (currentLoop.notes[beatIndex]) {
    currentLoop.notes[beatIndex].push(note);
  } else {
    currentLoop.notes[beatIndex] = [note];
  }

  const content = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(mainBody)
  };
  fetch(NOTES_URL, content)
    .then(e => e.json())
    .then(e => {
      renderNote(e, e.beat_index);
    });
}

let cID = 0;
let delay = 1;
let volume = 256;
let velocity = 32;

const timeEvent = {};

const typingElements = [createFormInput, ...updateFormInputs];

document.body.addEventListener("keydown", e => {
  if(!typingElements.includes(document.activeElement)){
    const octave = document.querySelector("#octave")
    ///Change Octave//
    if(e.key === "Shift"){
      if(currentOctave < 3) {
        octaveUp();
        octave.innerText = +(octave.innerText)+!!octave + new Array()
      }
    }

    if(e.key === "Control"){
      if(currentOctave > -1) {
        octaveDown();
        octave.innerText = +(octave.innerText)-!!octave + new Array();
      }
    }

    //Play notes//
    if (notesByKey[e.key]) {
      startNote(cID, notesByKey[e.key], velocity, volume, e.key);
    }
  }
});

document.body.addEventListener("keyup", e => {
  if (notesByKey[e.key]) {
    endNote(notesByKey[e.key], e.key);
  }
});

function playNotes(notes) {
  notes.forEach(playNote);
}

function playNote(note) {
  MIDI.setVolume(note.cID, note.volume);
  MIDI.noteOn(note.cID, note.note_key, note.velocity, 0);
  MIDI.noteOff(note.cID, note.note_key, note.delay);
}

function startNote(cID, noteKey, velocity, volume, keyInput) {
  if (!timeEvent[keyInput]) {
    timeEvent[keyInput] = { time: Date.now(), cID: cID, index: beatIndex };
    MIDI.setVolume(cID, volume);
    MIDI.noteOn(cID, noteKey, velocity, 0);
  }
}

let isRecording = false;

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
        delay,
        currentRecording.id
      );
      saveNote(note, timeEvent[input].index, beatIndex);
    }
    timeEvent[input] = null;
  }
}

// function renderNote(cID, noteKey, velocity, volume, delay) {
//   const note = createNote(cID, noteKey, velocity, volume, delay);
//   playNotes([note]);
//   //saveNote(note);
// }
