class NoteSerializer < ActiveModel::Serializer
  attributes :id, :loop_id, :recording_id, :cID, :note_key, :velocity, :volume, :beat_index, :beat_index_off, :delay
  belongs_to :loop
end
