import React from "react";
import  BidDetails  from "./BidDetails";

export function BidList(props) {
    let { bids } = props;
    if (!bids) {
        bids = [];
    }
    return (
        <ul
            style={{
                listStyle: "none",
                paddingLeft: 0
            }}
        >
            {bids.map(bid => (
                <li key={bid.id}>
                    <BidDetails
                        bid={bid.bid}
                        created_at={bid.created_at}
                    />
                </li>
            ))}
        </ul>
    );
}
