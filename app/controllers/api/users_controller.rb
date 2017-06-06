class Api::UsersController < ApplicationController
  def create
    @user = User.new(username: params[:username])

    @group = Group.find_by(group_code: params[:group_code])
    if @group
      if @user.save
        @user.group = @group
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      render json: "No such group, sorry!", status: 404
    end
  end

  # Below likely handled by websockets (commented in case I am wrong,
  # remove when confirmed unnecessary)
  #   def update
  #     @user = User.find(params[:id])
  #
  #     if @user.update_attributes(user_params)
  #
  #     else
  #     end
  #   end
  #
  #   private
  #   def user_params
  #     params.require(:user).permit(:filter_ready, :choice_ready)
  #   end
end
