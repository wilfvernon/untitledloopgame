class Loop {
  constructor(id, name, notesArray, beatsPerBar, bars, BPM) {
    this.id = id;
    this.name = name;

    this.beatsPerBar = beatsPerBar;
    this.bars = bars;
    this.BPM = BPM;

    this.notes = [];
    this.notes.length = beatsPerBar * bars;

    notesArray.forEach(e => {
      if (this.notes[e.beatIndex].length) {
        this.notes[e.beatIndex].push(e);
      } else {
        this.notes[e.beatIndex] = [].push(e);
      }
    });

    all.push(this);
  }

  get beatsPerTempo() {
    return 60000 / this.BPM / this.beatsPerBar;
  }

  static find(id) {
    Loop.find(e => {
      e.id === id;
    });
  }
}

Loop.all = [];
