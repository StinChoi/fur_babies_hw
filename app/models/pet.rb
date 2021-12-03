class Pet < ApplicationRecord
  has_many :food, dependent: :destroy
  validates :name, presence: true
end
