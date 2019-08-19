import React, { Component } from "react";
import { AuctionDetails} from "./AuctionDetails";
import { Auction } from "../api/auction";
import { BidList } from "./BidList";



export class AuctionShowPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auction: null
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        Auction.one(id).then(auction => {
            this.setState({
                auction
            });
        });
    }

    render() {
        return (
            <main className="Page">
                <AuctionDetails {...this.state.auction}
                />

                <h2>Previous Bids</h2>
    
            </main>
        );
    }
}