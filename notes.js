function createNote(cID, noteKey, velocity, volume) {
  return {
    cID: cID,
    noteKey: noteKey,
    velocity: velocity,
    volume: volume
  };
}

function saveNote(note) {
  notes[beatIndex] = note;
}

function playNote(note) {
  var delay = 0; // play one note every quarter second

  MIDI.setVolume(note.cID, note.volume);
  MIDI.noteOn(note.cID, note.noteKey, note.velocity, delay);
  MIDI.noteOff(note.cID, note.noteKey, delay + 1);
}

function renderNote(cID, noteKey, velocity, volume) {
  const note = createNote(cID, noteKey, velocity, volume);
  playNote(note);
  saveNote(note);
}

let cID = 0;
document.body.addEventListener("keydown", e => {
  if (e.key === "q") renderNote(cID, 48, 63, 127);
  if (e.key === "w") renderNote(cID, 50, 63, 127);
  if (e.key === "e") renderNote(cID, 52, 63, 127);
  if (e.key === "r") renderNote(cID, 53, 63, 127);
  if (e.key === "t") renderNote(cID, 55, 63, 127);
  if (e.key === "y") renderNote(cID, 57, 63, 127);
  if (e.key === "u") renderNote(cID, 59, 63, 127);
  if (e.key === "i") renderNote(cID, 60, 63, 127);

  if (e.key === "1") cID = 0;
  if (e.key === "2") cID = 1;
  if (e.key === "3") cID = 2;
  if (e.key === "4") cID = 3;
});
