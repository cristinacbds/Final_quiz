import React from "react";

export default function BidDetails(props) {
    const { bid, created_at } = props;

    return (
        <div>
            <p>
                ${props.bid} on {props.created_at}
            </p>
        </div>
    );
}

