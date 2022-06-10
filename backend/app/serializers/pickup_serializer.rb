class PickupSerializer < ActiveModel::Serializer
  attributes :id

  has_one :location
  has_many :pickup_statuses 
end
