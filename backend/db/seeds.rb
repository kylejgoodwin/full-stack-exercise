# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

case Rails.env
when "development"

    PickupStatus.destroy_all
    Pickup.destroy_all
    Location.destroy_all
    User.destroy_all
    Organization.destroy_all

    o_one = Organization.create!(name: "Revivn")
    o_two = Organization.create!(name: "Microsoft")

    User.create!(organization: o_two, name: "Kyle Goodwin")
    User.create!(organization: o_one, name: "John Johnson")

    office_one = Location.create!(organization: o_two, name: "Office 1", address: "101 Main St.")
    office_two = Location.create!(organization: o_two, name: "Office 2", address: "102 Main St.")

    Pickup.create!(location: office_one, datetime: Time.now + 10.hours)
    Pickup.create!(location: office_one, datetime: Time.now + 11.hours)
    Pickup.create!(location: office_two, datetime: Time.now + 11.hours)



end

