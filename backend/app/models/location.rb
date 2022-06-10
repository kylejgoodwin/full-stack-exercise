class Location < ApplicationRecord
    belongs_to :organization

    has_many :pickups

    validates :name, presence: true
    validates :organization, :presence => true
    validates :address, presence: true
end
