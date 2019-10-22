function createNote(cID, note_key, velocity, volume, delay) {
  return {
    cID: cID,
    note_key: note_key,
    velocity: velocity,
    volume: volume,
    delay: delay
  };
}

function saveNote(note) {
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

function playNotes(notes) {
  notes.forEach(note => {
    MIDI.setVolume(note.cID, note.volume);
    MIDI.noteOn(note.cID, note.note_key, note.velocity, 0);
    MIDI.noteOff(note.cID, note.note_key, delay);
  });
}

function renderNote(cID, noteKey, velocity, volume, delay) {
  const note = createNote(cID, noteKey, velocity, volume, delay);
  playNotes([note]);
  //  saveNote(note);
}

let cID = 0;

let delay = 0.2;
let volume = 157;
let velocity = 32;

document.body.addEventListener("mousewheel", e => {
  delay += +e.deltaY / 1000;
  if (delay > 5) {
    delay = 5;
  }
  if (delay < 0.2) {
    delay = 0.2;
  }
  console.log(delay);
});

document.body.addEventListener("keydown", e => {
  if (e.key === "q") renderNote(cID, 35, velocity, volume, delay);
  if (e.key === "w") renderNote(cID, 36, velocity, volume, delay);
  if (e.key === "e") renderNote(cID, 38, velocity, volume, delay);
  if (e.key === "r") renderNote(cID, 40, velocity, volume, delay);
  if (e.key === "t") renderNote(cID, 41, velocity, volume, delay);
  if (e.key === "y") renderNote(cID, 43, velocity, volume, delay);
  if (e.key === "u") renderNote(cID, 45, velocity, volume, delay);
  if (e.key === "i") renderNote(cID, 47, velocity, volume, delay);
  if (e.key === "a") renderNote(cID, 48, velocity, volume, delay);
  if (e.key === "s") renderNote(cID, 50, velocity, volume, delay);
  if (e.key === "d") renderNote(cID, 52, velocity, volume, delay);
  if (e.key === "f") renderNote(cID, 53, velocity, volume, delay);
  if (e.key === "g") renderNote(cID, 55, velocity, volume, delay);
  if (e.key === "h") renderNote(cID, 57, velocity, volume, delay);
  if (e.key === "j") renderNote(cID, 59, velocity, volume, delay);
  if (e.key === "k") renderNote(cID, 60, velocity, volume, delay);

  if (e.key === "1") cID = 0;
  if (e.key === "2") cID = 1;
  // if (e.key === "3") cID = 2;
  // if (e.key === "4") cID = 3;
});
