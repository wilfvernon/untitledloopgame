class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.integer :loop_id
      t.integer :cID
      t.integer :noteKey
      t.integer :velocity
      t.integer :volume

      t.timestamps
    end
  end
end
