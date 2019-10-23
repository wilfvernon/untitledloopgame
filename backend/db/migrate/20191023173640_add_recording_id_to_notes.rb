class AddRecordingIdToNotes < ActiveRecord::Migration[6.0]
  def change
    add_column :notes, :recording_id, :integer
  end
end
