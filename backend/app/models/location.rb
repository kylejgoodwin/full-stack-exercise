class Location < ApplicationRecord
    belongs_to :organization
    validates :name, presence: true
    validates :organization, :presence => true
    validates :address, presence: true
end
