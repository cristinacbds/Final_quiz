class Api::V1::BidsController < Api::ApplicationController
    before_action :set_auction
    before_action :set_bid, only: [:show]
    
    def index
        render json: @auction.bids
    end

    def create
        @auction.bids.create(bid_params)
        render json: @auction.bids.last
    end

    def show
        render json: @auction
    end

    private
    def bid_params
        params.require(:bid).permit(:bid)
    end

    def set_auction
        @auction = Auction.find(params[:auction_id])
    end

    def set_course
        @bid = @auction.bids.find_by!(id: params[:id])
    end
end