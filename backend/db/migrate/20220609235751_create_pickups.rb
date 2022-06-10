class CreatePickups < ActiveRecord::Migration[6.0]
  def change
    create_table :pickups do |t|
      t.datetime :datetime
      t.references :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
