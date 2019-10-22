window.onload = function() {
  const instrumentsName = [
    "synth_bass_1",
    "accordion",
    "clarinet",
    "flute"
  ];

  MIDI.loadPlugin({
    soundfontUrl: "fatboy/",
    instruments: instrumentsName,
    onsuccess: function() {
      MIDI.programChange(0, MIDI.GM.byName[instrumentsName[0]].number);
      MIDI.programChange(1, MIDI.GM.byName[instrumentsName[1]].number);
      MIDI.programChange(2, MIDI.GM.byName[instrumentsName[2]].number);
      MIDI.programChange(3, MIDI.GM.byName[instrumentsName[3]].number);
      startLooper();
    }
  });
};
