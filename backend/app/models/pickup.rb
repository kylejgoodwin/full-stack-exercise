class Pickup < ApplicationRecord
  belongs_to :location
  has_many :pickup_statuses

  validates :datetime, presence: true
  validates :location, :presence => true

  # after_create :initalize_pickup_statuses

end
