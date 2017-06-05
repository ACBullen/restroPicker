class Api::FiltersController < ApplicationController
  def create
    @user = User.find(params[:user_id])
    @categories = params[:categories]
    @prices = params[:prices]
    
    if @user
      successful = true
      @categories.each do |choice|
        new_cj = CategoryJoin.new(user_id: @user.id, category_id: choice)
        unless new_cj.save
          successful = false
          break
        end
      end

      if successful
        @prices.each do |price|
          new_pj = PriceJoin.new(user_id: @user.id, price_id: price)
          unless new_pj.save
            successful = false
            break
          end
        end
      end

      unless successful
        CategoryJoin.where(user_id: @user.id).destroy_all
        PriceJoin.where(user_id: @user.id).destroy_all
        render json: "Something went wrong!", status: 422
      end

      @user.filter_ready = true
      @user.save
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    CategoryJoin.where(user_id: @user.id).destroy_all
    PriceJoin.where(user_id: @user.id).destroy_all
    @user.filter_ready = false
    @user.save
  end


end
