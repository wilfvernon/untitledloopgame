const loop = {
  name: "untitled loop game",
  notes: [],
  beatsPerBar: 128,
  bars: 4,
  BPM: 90
};

const beatsPerTempo = 60000 / loop.BPM / loop.beatsPerBar;
loop.notes.length = loop.beatsPerBar * loop.bars;
console.log(beatsPerTempo);

let beatIndex = 0;
let j = 0;
const int = setInterval(e => {
  beatIndex++;

  if (loop.notes[beatIndex]) playNote(loop.notes[beatIndex]);
  // if (beatIndex % loop.beatsPerBar === 0) console.log(++j % loop.bars);
  if (beatIndex === loop.notes.length) beatIndex = 0;
}, beatsPerTempo);
