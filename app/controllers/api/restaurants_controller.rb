class Api::RestaurantsController < ApplicationController
  def create
      @restaurants =
       resto_params[:restaurants].map do
         |r| Restaurant.create(r)
     end
    render :show
  end

  def index
    @restaurants = Restaurant.all
      .where("group_id = ?", params[:group])
  end

  private
  def resto_params
    params.permit(:restaurants => [:group_id, :name, :rating, :yelp_url, :address, :image_url, :categories])
  end
end
