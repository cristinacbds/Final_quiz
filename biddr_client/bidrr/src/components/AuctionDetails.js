import React from "react";

export function AuctionDetails(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h3>
                {props.description}
            </h3>
            <h5>
                <small>Price ${props.price}</small>
            </h5>
            <h5>
                <small>Ends: ${props.ends_at}</small>
            </h5>
            <p>
                <small>Created at {props.created_at}</small>
            </p>
        </div>
    );
}