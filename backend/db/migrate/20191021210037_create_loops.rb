class CreateLoops < ActiveRecord::Migration[6.0]
  def change
    create_table :loops do |t|
      t.string :name
      t.integer :beats_per_bar
      t.integer :bars
      t.integer :BPM

      t.timestamps
    end
  end
end
