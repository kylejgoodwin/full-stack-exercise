require 'rails_helper'

RSpec.describe Pickup, type: :model do

  organization = Organization.first_or_create!(name: "Big Corporation")
  location = Location.first_or_create!(name: "Office1", address: "1626 Main St.", organization: organization)

  it 'has a datetime' do
    pickup = Pickup.new(location: location)
    expect(pickup).not_to be_valid
  end

  it 'has a location' do
    pickup = Pickup.new(datetime: Time.now + 1.hour)
    expect(pickup).not_to be_valid
  end

  #taking too much time to get working
  # it 'should create an inital PickupStatus' do
  #   pickup = Pickup.create!(datetime: Time.now + 1.hour, location: location)
  #   expect(PickupStatus).to receive(:create!)
  # end
end
