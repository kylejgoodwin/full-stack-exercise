require 'rails_helper'

RSpec.describe Organization, type: :model do
  
  it 'has a name' do
    organization = Organization.new()
    expect(organization).not_to be_valid
  end
end
