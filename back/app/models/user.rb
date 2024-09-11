# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  name       :string(255)      not null
#  image_url  :string(255)
#  uid        :string(255)      not null
#  provider   :string(255)      not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
  validates :name, presence: true
  validates :uid, presence: true
  validates :provider, presence: true
  validates :uid, uniqueness: { scope: :provider }
  validates :provider, uniqueness: { scope: :uid }
  validates :image_url, format: { with: URI::DEFAULT_PARSER.make_regexp }, allow_blank: true

  def self.find_or_create_from_auth(auth)
    provider = auth[:provider]
    uid = auth[:uid]
    name = auth[:info][:name]
    image_url = auth[:info][:image]

    find_or_create_by(provider:, uid:) do |user|
      user.name = name
      user.image_url = image_url
    end
  end
end
