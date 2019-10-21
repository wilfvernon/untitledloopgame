const notes = [];

const beatsPerBar = 128;
const bars = 1;
const BPM = 90;

const beatsPerTempo = 60000 / BPM / beatsPerBar;
notes.length = beatsPerBar * bars;
console.log(beatsPerTempo);

let beatIndex = 0;
let j = 0;
const int = setInterval(e => {
  beatIndex++;

  if (notes[beatIndex]) playNote(notes[beatIndex]);
  if (beatIndex % beatsPerBar === 0) console.log(++j % bars);
  if (beatIndex === beatsPerBar * bars) beatIndex = 0;
}, beatsPerTempo);
