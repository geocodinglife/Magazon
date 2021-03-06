class ChangePayment < ActiveRecord::Migration
  def change
    drop_table(:payments)

    create_table :payments do |t|
      t.integer :user_id, null: false
      t.integer :network_id, null: false
      t.string :cardholder, null: false
      t.string :card_number, null: false
      t.date :expires, null: false
      t.string :cvv, null: false

      t.timestamps null: false
    end

  end
end
