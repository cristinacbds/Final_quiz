class Api::ApplicationController < ApplicationController
    skip_before_action :verify_authenticity_token

    # This is used for user authentication 
    private
    def current_user
        if session[:user_id]
            @current_user ||= User.find_by_id(session[:user_id])
        end
    end
    helper_method :current_user

    def user_signed_in?
        current_user.present?
    end
    helper_method :user_signed_in?

    def authenticate_user!
        unless user_signed_in?
            flash[:danger] = "You must sign in/sign up first!"
            render json: {status: 401}, status: 401
        end
    end

end
