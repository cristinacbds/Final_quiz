import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Grid, Input, Button, Segment, Message, Header } from 'semantic-ui-react';
import { Session } from '../api/session';

export function SignInPage(props) {
    document.body.className = ('sign-in-page')
    const { onSignIn = () => { } } = props;
    function handleSubmit(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const formData = new FormData(currentTarget);
        const signInParams = {
            email: formData.get('email'),
            password: formData.get('password'),
        };
        Session.create(signInParams).then(res => {
            if (res.id) {
                onSignIn();
                props.history.push('/')
            }
        });
    };
    return (
        <Grid centered columns={2} className='sign-in'>
            <Grid.Column>
                <Header as="h2" textAlign="center">
                    Sign In
                </Header>
                <Segment>
                    <Form onSubmit={handleSubmit} size="large">
                        <Form.Input fluid icon="user" iconPosition="left" placeholder="Email" control={Input} name='email' required />
                        <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" control={Input} name='password' type="password" required />
                        <Button type='submit' color="blue" fluid size="large">
                            Sign Ip
                        </Button>
                    </Form>
                </Segment>
                <Message>
                    Not registered yet?  <NavLink to='/signup'> Register</NavLink>
                </Message>
            </Grid.Column>
        </Grid>
    )
};