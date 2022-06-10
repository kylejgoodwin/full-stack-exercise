class PickupStatus < ApplicationRecord
  enum status: { pending: 0, in_progress: 1, complete: 2 }
  belongs_to :pickup
  validates :status, presence: true

end
