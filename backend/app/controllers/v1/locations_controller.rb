class V1::LocationsController < ApplicationController

    def index
        locations = Location.where(organization_id: params[:organization_id])
        render(json: locations.as_json, status: :ok)
    end 

    def create
        location = Location.create!(create_location_params)
        render(json: location.as_json, status: :ok)
    end

    private

    def create_location_params
        params.permit([:address,:name,:organization_id])
    end


end
