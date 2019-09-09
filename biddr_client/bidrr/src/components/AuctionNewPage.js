import React from 'react';
import { Auction } from '../api/auction';


export default class AuctionNewPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newAuctionData: {
                title: '',
                description: '',
                price: '',
                ends_at: ''
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const newData = { [event.target.name]: event.target.value };
        this.setState({
            newAuctionData: {
                ...this.state.newAuctionData,
                ...newData,
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        Auction.create(this.state.newAuctionData).then(data => {
            if (!data.id) {
                this.setState({
                    errors: data.errors
                });
            } else {
                this.props.history.push(`/auctions/${data.id}`);
            }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        name='title'
                        value={this.state.newAuctionData.title}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input
                        type='text'
                        name='description'
                        value={this.state.newAuctionData.description}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <input
                        type='number'
                        name='price'
                        value={this.state.newAuctionData.price}
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <label htmlFor='ends_at'>Ends at</label>
                    <input
                        type='date'
                        name='ends_at'
                        value={this.state.newAuctionData.ends_at}
                        onChange={this.handleChange}
                    />
                </div>
                <input type='submit' value='Create Auction' />
            </form>
        );
    }
}