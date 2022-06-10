class Pickup < ApplicationRecord
  belongs_to :location
  has_many :pickup_statuses

  validates :datetime, presence: true
  validates :location, :presence => true

  after_create :initalize_pickup_statuses

  private 

  def initalize_pickup_statuses
    PickupStatus.create!(status: "pending", pickup_id: self.id)
  end

end
