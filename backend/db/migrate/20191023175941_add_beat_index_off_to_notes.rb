class AddBeatIndexOffToNotes < ActiveRecord::Migration[6.0]
  def change
    add_column :notes, :beat_index_off, :integer
  end
end
