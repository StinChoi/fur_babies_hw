class Api::FoodController < ApplicationController
  before_action :set_pet
  before_action :set_food, only: [:show, :update, :destroy]

  def index
    render json: @pet.food
  end

  def show
    render json: @food
  end

  def create
    @food = @pet.food.new(food_params)
    if (@food.save)
      render json: @food
    else
      render json: { errors: @food.errors }, status: 422
  end
end

  def update
    if (@food.update(food_params))
      render json: @food
    else 
      render json: { errors: @food.erros }, status: 422
    end
  end

  def destroy
    render json: @food.destroy
  end

  private

  def food_params
    params.require(:food).permit(:name, :price)
  end

  def set_food
    @food = @pet.food.find(params[:id])
  end

end
