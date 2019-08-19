import { BASE_URL } from "../config";

export const Auction = {
    all() {
        return fetch(`${BASE_URL}/auctions`, {
            // Makes include cookies in request and response for
            // cross-origin requests.
            credentials: "include"
        }).then(res => res.json());
    },
    async one(id) {
        const res = await fetch(`${BASE_URL}/auctions/${id}`, {
            credentials: "include"
        });
        const subject = await res.json();
        return subject;
    },
    create(params) {
        return fetch(`${BASE_URL}/auctions`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
}