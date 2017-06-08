class Api::RankingsController < ApplicationController
  def create
    @rankings = params[:rankings]

    @rankings.each do |ranking|
      ranking.user_id = params[:user_id]
      Ranking.create(ranking)
    end
  end
end
