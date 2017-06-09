class Api::ResultsController < ApplicationController
  def show
    # @group = Group.find(params[:id])
    # @restaurants = @group.restaurants.includes(:rankings)
    # render json: best_choice_algo(@restaurants)

    @group = Group.find(params[:id])
    if @group
      render json: "Here yo results!"
    end
  end

  private

  def best_choice_algo(restaurants)
    #Alex Scott's sorting algorithm gets executed here.
  end
end
