class Api::V1::AuctionsController < Api::ApplicationController
    before_action :authenticate_user!, except: [:index, :show]

    def index
        auctions= Auction.all
        render json: auctions, status: status
    end

    def create
        auction = Auction.new auction_params
        auction.user = current_user

        if auction.save
            render json: auction
        else
            render(
	        json: { errors: auction.errors },
	        status: 422 # Unprocessable Entity
	      )
        end
    end

    def show
        auction = Auction.find(params[:id])
        render json: auction, status: status
    end

    private
    def auction_params
        params.require(:auction).permit(:title, :description, :ends_at, :price)
    end
end
