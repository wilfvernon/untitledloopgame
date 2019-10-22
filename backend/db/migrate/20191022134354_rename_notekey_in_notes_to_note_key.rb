class RenameNotekeyInNotesToNoteKey < ActiveRecord::Migration[6.0]
  def change
    rename_column :notes, :noteKey, :note_key
  end
end
