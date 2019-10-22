class AddBeatIndexToNotes < ActiveRecord::Migration[6.0]
  def change
    add_column :notes, :beat_index, :integer
  end
end
