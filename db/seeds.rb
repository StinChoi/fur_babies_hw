# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

fur1 = Pet.create(name: "Penelope", description: "Cat")
fur2 = Pet.create(name: "Smalls", description: "Dog")
fur1 = Pet.create(name: "Ginger", description: "Kitten")
fur2 = Pet.create(name: "Coco", description: "Puppy")


fur1.foods.create(name: "Orijen", price: 26.99)
fur2.foods.create(name: "Blue Buffalo", price: 36.99)
fur1.foods.create(name: "Taste of the Wild", price: 19.99)
fur2.foods.create(name: "Acana", price: 39.99)

Store.create(name: "Fur Babies", city: "Rancho Bernardo", state: "CA")
Store.create(name: "Pawlicious", city: "San Marcos", state: "CA")
