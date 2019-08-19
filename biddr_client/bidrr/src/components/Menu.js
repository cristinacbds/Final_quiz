import React, { Component } from 'react'
import { Container, Image, Menu, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Session } from '../api/session';


export function Navbar(props) {
    const { currentUser, onSignOut } = props
    function handleSignout(event) {
        event.preventDefault()
        Session.destroy().then(() => {
            onSignOut()
        })
    }
    return (
        <Menu>
            <Container>
                <Menu.Item as="a" header>
                    <Image
                        size="small"
                        src="https://www.designmantic.com/logo-images/10497.png?company=Company+Name&slogan=&verify=1"
                    />
                </Menu.Item>

                {currentUser ? (
                    <Menu.Menu position="right">
                        <Menu.Item as={NavLink} exact to="/auctions" name="auctions">
                            Auctions
                        </Menu.Item>
                        <Menu.Item as={NavLink} exact to="/" name="welcome">
                            Welcome
                        </Menu.Item>
                        <Menu.Item>
                            <a onClick={handleSignout}>Sign Out</a>
                        </Menu.Item>
                    </Menu.Menu>
                ) : (
                        <Menu.Menu position="right">
                            <Menu.Item as={NavLink} exact to="/signin" name="login">
                                Sign In
                            </Menu.Item>

                            <Menu.Item as={NavLink} exact to="/signup" name="register">
                                Register
                            </Menu.Item>

                        </Menu.Menu>
                    )}
            </Container>
        </Menu>
    )
}