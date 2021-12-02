class Pet < ApplicationRecord
  has_many :foods, dependent: :destroy
end
