class Api::RestaurantsController < ApplicationController
  def create
    # Params assumed to be an array of objects returned from the initial
    # yelp query
    # As yet untested due to postman weirdness
    # @restaurants = resto_params
    #
    # @restaurants.each do |restaurant|
    #   # restaurant.group_id = params[:group_id]

    # hash = {}
    # hash[:info] = resto_params["info"]
    # p hash

    # restaurants = resto_params.info
      @restaurants =
       resto_params[:restaurants].map do
         |r| Restaurant.create(r)
     end
    render :show
  end

  private
  def resto_params
    params.permit(:restaurants => [:group_id, :name, :rating, :yelp_url, :address, :image_url, :categories])
  end
end
