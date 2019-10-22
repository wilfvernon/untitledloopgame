class AddDelayToNotes < ActiveRecord::Migration[6.0]
  def change
    add_column :notes, :delay, :real
  end
end
