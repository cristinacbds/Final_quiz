import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

import { Auction } from "../api/auction";

export class AuctionIndexPage extends Component {
    state = {
        auctions: [],
    };

    componentDidMount() {
        Auction.all().then(auctions => {
            this.setState({ auctions });
        });
    }

    render() {
        return (
            <main className="Page">
                <h2  align="center">Auctions</h2>
                <ul
                    style={{
                        listStyle: "none",
                        paddingLeft: 0
                    }}
                >
                    {this.state.auctions.map(auction => (
                        <li key={auction.id}>
                            <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>{" "}
                            <p>{auction.created_at}</p>
                        </li>
                    ))}
                </ul>
            </main>
        );
    }
}