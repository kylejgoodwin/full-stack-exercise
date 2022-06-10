require 'rails_helper'

RSpec.describe "V1::Locations", type: :request do
  describe "GET /index" do
    before do
      organization = Organization.create!(name: "Test")
      user = User.create!(name: "Test User", organization: organization)
      get "/v1/organization/#{organization.id}/locations"
    end

    it "returns success" do
      expect(response).to have_http_status(:success)
    end

    # it "JSON body response contains expected recipe attributes" do
    #   json_response = JSON.parse(response.body)[0]
    #   expect(json_response.keys).to match_array(["id", "created_at", "organization_id", "updated_at", "name"])
    # end


    # it "JSON body has a length of 1" do
    #   json_response = JSON.parse(response.body)
    #   expect(json_response.length).to equal(1)
    # end


  end
end
