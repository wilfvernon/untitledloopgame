# l1 = Loop.create({
#   name: "untitled loop game",
# })

# Note.create({
#   loop_id: l1.id,
#   cID: 0,
#   note_key: 50,
#   beat_index: 0,
# })

l1 = Loop.create({
  name: "crosshairs",
})

r1 = Recording.create()
r2 = Recording.create()

Note.create({
  loop_id: l1.id,
  cID: 0,
  note_key: 54,
  beat_index: 0,
  recording_id: r1.id
})

Note.create({
  loop_id: l1.id,
  cID: 0,
  note_key: 47,
  beat_index: 63,
  recording_id: r1.id
})
Note.create({
  loop_id: l1.id,
  cID: 0,
  note_key: 45,
  beat_index: 127,
  recording_id: r1.id
})
Note.create({
  loop_id: l1.id,
  cID: 0,
  note_key: 43,
  beat_index: 191,
  recording_id: r1.id
})

Note.create({
  loop_id: l1.id,
  cID: 0,
  note_key: 38,
  beat_index: 255,
  recording_id: r1.id
})

Note.create({
  loop_id: l1.id,
  cID: 0,
  note_key: 31,
  beat_index: 319,
  recording_id: r1.id
})
Note.create({
  loop_id: l1.id,
  cID: 0,
  note_key: 30,
  beat_index: 383,
  recording_id: r2.id
})
Note.create({
  loop_id: l1.id,
  cID: 0,
  note_key: 27,
  beat_index: 447,
  recording_id: r2.id
})
