function createNote(cID, note_key, velocity, volume) {
  return {
    cID: cID,
    note_key: note_key,
    velocity: velocity,
    volume: volume
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
  var delay = 0; // play one note every quarter second
  notes.forEach(note => {
    MIDI.setVolume(note.cID, note.volume);
    MIDI.noteOn(note.cID, note.note_key, note.velocity, delay);
    MIDI.noteOff(note.cID, note.note_key, delay + 1);
  });
}

function renderNote(cID, noteKey, velocity, volume) {
  const note = createNote(cID, noteKey, velocity, volume);
  playNotes([note]);
  saveNote(note);
}

let cID = 0;
document.body.addEventListener("keydown", e => {
  if (e.key === "a") renderNote(cID, 48, 63, 127);
  if (e.key === "s") renderNote(cID, 50, 63, 127);
  if (e.key === "d") renderNote(cID, 52, 63, 127);
  if (e.key === "f") renderNote(cID, 53, 63, 127);
  if (e.key === "g") renderNote(cID, 55, 63, 127);
  if (e.key === "h") renderNote(cID, 57, 63, 127);
  if (e.key === "j") renderNote(cID, 59, 63, 127);
  if (e.key === "k") renderNote(cID, 60, 63, 127);

  if (e.key === "1") cID = 0;
  if (e.key === "2") cID = 1;
  if (e.key === "3") cID = 2;
  if (e.key === "4") cID = 3;
});
