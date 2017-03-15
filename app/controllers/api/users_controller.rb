class Api::UsersController < ApplicationController

  def index
    if current_user.admin
      @users = User.all
      render 'api/users/index'
    end
  end

  def create
    @user = User.create(user_params)
    if @user.save
      # @user.update_attribute(cart_id: Cart.new({user_id: @user.id}).id)
      puts @user
    else
      puts @user.errors.full_messages
    end
  end

  def update
    @user = current_user
    if (@user)
      if (@user.update(user_params))
      else
        puts @user.errors.full_messages
      end
    else
      puts @user.errors.full_messages
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password)
    end

end
