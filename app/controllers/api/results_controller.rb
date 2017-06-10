class Api::ResultsController < ApplicationController
  def show
    # @group = Group.find(params[:id])
    # @restaurants = @group.restaurants.includes(:rankings)
    # render json: best_choice_algo(@restaurants)

    @group = Group.find(params[:id])
    if @group
      if @group.results_ready == false
        @group.results_ready = true
        @group.save
      end
      render json: ["Hurr yo results!"]
    end
  end

  private

  def best_choice_algo(restaurants)
    #Alex Scott's sorting algorithm gets executed here.
  end
end
