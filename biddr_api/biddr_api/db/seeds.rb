# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Auction.destroy_all
Bid.destroy_all

NUM_OF_USERS = 20
NUM_OF_AUCTIONS = 7
NUM_BIDS = 10
PASSWORD = "1234"

NUM_OF_USERS.times do 
  u = User.create(
    name: Faker::Name.first_name,
    email: Faker::Internet.unique.email,
    password: PASSWORD,
  )
end

users = User.all

NUM_OF_AUCTIONS.times do
  a = Auction.create({
    title: Faker::Cannabis.strain,
    description: Faker::Quote.robin,
    created_at: "2019-07-06",
    updated_at: "2019-07-10",
    ends_at: "2019-07-12",
    price:  Faker::Number.decimal(l_digits: 3, r_digits: 2),
    user: users.sample
  })

  if a.valid?
    rand(0..10).times.each do
      c = Bid.create(
        bid:  Faker::Number.decimal(l_digits: 3, r_digits: 2),
        created_at: "2019-07-06",
        updated_at: "2019-07-10",
        auction: a,
        user: users.sample
      )
    end
  end
end

puts "Created #{User.count} users"
puts "Created #{Auction.count} products"
puts "Created #{Bid.count} reviews"