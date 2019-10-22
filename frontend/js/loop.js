class Loop {
  constructor(loop) {
    this.id = loop.id;
    this.name = loop.name;

    this.beatsPerBar = loop.beats_per_bar;
    this.bars = loop.bars;
    this.BPM = loop.BPM;

    this.notes = [];
    this.notes.length = loop.beats_per_bar * loop.bars;

    loop.notes.forEach(e => {
      if (this.notes[e.beatIndex]) {
        this.notes[e.beatIndex].push(e);
      } else {
        this.notes[e.beatIndex] = [].push(e);
      }
    });

    Loop.all.push(this);
  }

  get beatsPerTempo() {
    return 60000 / this.BPM / this.beatsPerBar;
  }
  static all = [];

  static find(id) {
    Loop.find(e => {
      e.id === id;
    });
  }
}
