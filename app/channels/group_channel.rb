class GroupChannel< ApplicationCable::Channel
  def subscribed
    stream_from "channel_#{params[:channel_name]}"
  end
end