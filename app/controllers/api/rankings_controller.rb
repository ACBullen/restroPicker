class Api::RankingsController < ApplicationController
  def create
    @rankings = params[:rankings]

    @rankings.each do |ranking|
      Ranking.create(ranking)
    end
  end
end
