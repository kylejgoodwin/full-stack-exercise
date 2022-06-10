class PickupSerializer < ActiveModel::Serializer
  attributes :id, :datetime

  has_one :location
  has_many :pickup_statuses 
end
