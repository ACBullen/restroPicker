class Api::RankingsController < ApplicationController
  def create
    @rankings = ranking_params[:rankings].map do |ranking|
      Ranking.create(ranking)
    end
    @user = User.find(@rankings.first.user_id)
    @user.ranking_ready = true
    @user.save
    render :show
  end

  private
  def ranking_params
    params.permit(:rankings => [:user_id, :rest_id, :ranking])
  end
end
