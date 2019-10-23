class NoteSerializer < ActiveModel::Serializer
<<<<<<< HEAD
  attributes :id, :loop_id, :recording_id, :cID, :note_key, :velocity, :volume, :beat_index, :beat_index_off, :delay
=======
  attributes :id, :loop_id, :cID, :note_key, :velocity, :volume, :beat_index, :beat_index_off, :delay
>>>>>>> f919b76f76d14d2ae0cb4141bb22188aaf900d32
  belongs_to :loop
end
