import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Segment,
    Input,
} from 'semantic-ui-react';
import { Auction } from '../api/auction';


export default function AuctionNewPage(props) {
    const { onCreate = () => { } } = props;
    function handleSubmit(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);
        const createParams = {
            title: formData.get('title'),
            description: formData.get('description'),
            price: formData.get('price'),
            ends_at: formData.get('ends_at'),
        };
        Auction.create(createParams).then(res => {
            if (res.id) {
                onCreate();
                props.history.push(`/auctions/${res.id}`)
            }
        });
    };
    return (
        <Grid centered columns={2}>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                    New
                </Header>
                <Segment>
                    <Form onSubmit={handleSubmit} size="large">
                        <Form.Input placeholder="Title" control={Input} name='title' required />
                        <Form.Input placeholder="Description" control={Input} name='description' required />
                        <Form.Input placeholder="Price" control={Input} name='price' type="number"  />
                        <Form.Input placeholder="Ends at" control={Input} name='ends_at' type="date"  />
                        <Button type='submit' color="blue" fluid size="large">
                            Save
                    </Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    )
};