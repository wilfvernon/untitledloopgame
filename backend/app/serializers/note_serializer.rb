class NoteSerializer < ActiveModel::Serializer
  attributes :id, :loop_id, :cID, :noteKey, :velocity, :volume, :beat_index
  belongs_to :loop
end
