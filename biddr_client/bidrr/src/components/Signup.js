import React from 'react';
import {
    Button,
    Form,
    Grid,
    Header,
    Segment,
    Input,
} from 'semantic-ui-react';
import { User } from '../api/user';


export default function SignUpPage(props) {
    const { onSignUp = () => { } } = props;
    function handleSubmit(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);
        const signUpParams = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation'),
        };
        User.create(signUpParams).then(res => {
            if (res.id) {
                onSignUp();
                props.history.push('/')
            }
        });
    };
    return (
        <Grid centered columns={2}>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                    Sign Up
                </Header>
                <Segment>
                    <Form onSubmit={handleSubmit} size="large">
                        <Form.Input fluid icon="user" iconPosition="left" placeholder="Name" control={Input} name='name' required />
                        <Form.Input fluid icon="user" iconPosition="left" placeholder="Email" control={Input} name='email' required />
                        <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" control={Input} name='password' type="password" required />
                        <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password Confirmation" control={Input} name='password_confirmation' type="password" required />
                        <Button type='submit' color="blue" fluid size="large">
                            Sign Up
                    </Button>
                    </Form>
                </Segment>
            </Grid.Column>
        </Grid>
    )
};