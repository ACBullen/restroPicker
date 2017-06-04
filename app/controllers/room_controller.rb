class RoomController < ApplicationController
  def show
    @cur_room = Room.find_by(room_code: params[:room_code])
  end
end
