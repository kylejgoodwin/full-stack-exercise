require "rails_helper"

RSpec.describe PickupStatus, type: :model do
  
  organization = Organization.first_or_create!(name: "Big Corporation")
  location = Location.first_or_create!(name: "Office1", address: "1626 Main St.", organization: organization)
  pickup = Pickup.first_or_create!(location: location, datetime: Time.now + 1.hour)
  
  it "has a status" do
    pickup_status = PickupStatus.new(pickup: pickup)
    expect(pickup_status).not_to be_valid
  end

  it "has a pickup" do
    pickup_status = PickupStatus.new(status: "pending")
    expect(pickup_status).not_to be_valid
  end


end
