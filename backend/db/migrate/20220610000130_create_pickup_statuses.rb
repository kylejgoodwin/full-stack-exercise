class CreatePickupStatuses < ActiveRecord::Migration[6.0]
  def change
    create_table :pickup_statuses do |t|
      t.integer :status
      t.references :pickup, null: false, foreign_key: true

      t.timestamps
    end
  end
end
