class V1::PickupsController < ApplicationController
  def index
    pickups = Pickup.where(location: Location.where(organization_id: params[:organization_id]))
    render(json: pickups, status: :ok)
  end

  def create
    pickup = Pickup.create!(create_pickup_params)
    render(json: pickup, status: :ok)
  end

  private

  def create_pickup_params
    params.permit(:location_id, :datetime)
  end
end
