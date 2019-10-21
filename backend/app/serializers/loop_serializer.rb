class LoopSerializer < ActiveModel::Serializer
  attributes :id, :name, :beats_per_bar, :bars, :BPM
  has_many :notes
end
