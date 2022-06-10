require 'rails_helper'

RSpec.describe User, type: :model do

  organization = Organization.first_or_create!(name: "Big Corporation")
  
  it 'belongs to an organization' do
    user = User.new(name: "John") 
    expect(user).not_to be_valid
  end 

  it 'has a name' do
    user = User.new(organization: organization)
    expect(user).not_to be_valid
  end

end
