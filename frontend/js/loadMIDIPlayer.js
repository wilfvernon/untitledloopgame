window.onload = function() {
<<<<<<< HEAD
  const instrumentsName = [
    "lead_2_sawtooth",
    "electric_piano_2",
    "rock_organ",
    "percussive_organ"
  ];
=======
  const instrumentsName = ["violin", "tuba"];
>>>>>>> ff1b1496853250e43fa4836cb1d24ce70e7dd937

  MIDI.loadPlugin({
    soundfontUrl: "fatboy/",
    instruments: instrumentsName,
    onsuccess: function() {
      MIDI.programChange(0, MIDI.GM.byName[instrumentsName[0]].number);
      MIDI.programChange(1, MIDI.GM.byName[instrumentsName[1]].number);
      // MIDI.programChange(2, MIDI.GM.byName[instrumentsName[2]].number);
      // MIDI.programChange(3, MIDI.GM.byName[instrumentsName[3]].number);
      startLooper();
    }
  });
};
