class CreateUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :image_url
      t.string :uid, null: false
      t.string :provider, null: false
      t.timestamps
    end
    add_index :users, :uid, unique: true
    add_index :users, %i[uid provider], unique: true
  end
end
