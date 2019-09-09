class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :description,
    :price,
    :ends_at,
    :created_at
  )

  has_many :bids
end

