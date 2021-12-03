class Pet < ApplicationRecord
  has_many :foods, dependent: :destroy
  validates :name, presence: true
end
