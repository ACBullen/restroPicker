class GroupChannelController < ApplicationController

  def subscribed
    stream_from "channel_#{params[:group_id]}"

  end
end
