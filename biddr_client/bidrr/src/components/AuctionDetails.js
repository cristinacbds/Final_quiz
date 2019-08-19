import React from "react";
// Whenever you use JSX in file, you must do the above
// import otherwise the converted JSX tags into
// React.createElement(...) won't work because
// `React` will be undefined.

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