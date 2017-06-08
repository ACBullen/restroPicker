class Api::RestaurantsController < ApplicationController
  def create
    # Params assumed to be an array of objects returned from the initial
    # yelp query
    # As yet untested due to postman weirdness
    @restaurants = params[:restaurants]

    @restaurants.each do |restaurant|
      restaurant.group_id = params[:group_id]
      Restaurant.create(restaurant)
    end

    render 'api/groups/group'
  end
end
