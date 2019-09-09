class User < ApplicationRecord
    has_secure_password
    has_many :auctions, dependent: :nullify
    has_many :bids, dependent: :nullify
    validates :name, presence: true
    validates :password_digest, presence: true
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    validates :email, format: VALID_EMAIL_REGEX, presence: true, uniqueness: true
end
