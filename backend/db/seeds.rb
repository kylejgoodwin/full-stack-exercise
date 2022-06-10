# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

case Rails.env
when "development"

    o_one = Organization.create!(name: "Revivn")
    o_two = Organization.create!(name: "Microsoft")

    User.create!(organization: o_two, name: "Kyle Goodwin")
    User.create!(organization: o_one, name: "John Johnson")


end

