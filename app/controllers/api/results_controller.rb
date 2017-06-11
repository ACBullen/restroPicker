class Api::ResultsController < ApplicationController
  def show
    @group = Group.find(params[:id])
    @restaurants = @group.restaurants.includes(:rankings)
    render json: best_choice_algo(@restaurants)
  end

  private

  def best_choice_algo(restaurants)
    #Alex Scott's sorting algorithm gets executed here.
    rest_options = {}
    restaurants.each do |rest|
      rest_options[rest.id] = []
      rest.rankings.each do |ranking|
        rest_options[rest.id] << ranking.rank
      end
    end
    values = getPowerValues(rest_options)
    rankTotals = {}

    rest_options.each do |key, val|
      n = val.length
      total = 0
      while n > 0
        rank_to_be_added = val[n - 1]
        value_to_be_added = values[rank_to_be_added - 1]
        total += value_to_be_added
        n -= 1
      end
      rankTotals[key] = total
    end
    return rankTotals.to_a.sort {|a,b| b[1] <=> a[1]}.map{|a| a[0]}
  end

  def getPowerValues(options)
    power_values = []
    n = options.keys.length
    value = 1.0
    while n > 0
      power_values.push(value)
      n -= 1
      value /= 2.0
    end

    return power_values
  end
end
