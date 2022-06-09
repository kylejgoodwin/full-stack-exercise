require 'rails_helper'

RSpec.describe Location, type: :model do
  
  organization = Organization.first_or_create!(name: "Big Corporation")

  it 'has an address' do 
    location = Location.new(name: "Downtown Office", organization: organization)
    expect(location).not_to be_valid
  end

  it 'has an organization' do
    location = Location.new(name: "Downtown Office", address: "1626 Main Street")
    expect(location).not_to be_valid
  end 

  it 'has a name' do
    location = Location.new( address: "1626 Main Street", organization: organization)
    expect(location).not_to be_valid
  end 


end
