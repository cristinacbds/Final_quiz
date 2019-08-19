class BidSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :bid,
    :created_at
  )
end

