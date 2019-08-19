import React from "react";
function BidDetails(props) {
    return (
        <div>
            <p>
                {props.price}
                <br />
                <small>{props.created_at}</small>
            </p>
        </div>
    );
}

export { BidDetails };