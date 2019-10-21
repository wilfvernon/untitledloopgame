class NoteSerializer < ActiveModel::Serializer
  attributes :id, :loop_id, :cID, :noteKey, :velocity, :volume
  belongs_to :loop
end
