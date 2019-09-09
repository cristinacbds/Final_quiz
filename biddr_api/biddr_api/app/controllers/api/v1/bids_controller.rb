class Api::V1::BidsController < Api::ApplicationController
    
    before_action :authenticate_user!
    
    def index
        render json: @auction.bids
    end

    def create
        auction = Auction.find params[:auction_id]
        bid = Bid.new bids_params
        bid.user = current_user
        bid.auction = auction
        if bid.save
            render json: {id: bid.id}, status: 200
        else
            render json: {errors: bid.errors}, status: 422
        end
    end
    end


    private
    def bids_params
        params.require(:bid).permit(:bid)
    end

end