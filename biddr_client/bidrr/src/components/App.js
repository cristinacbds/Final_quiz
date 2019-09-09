import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Container } from 'semantic-ui-react';
import Signup from './Signup';
import { User } from '../api/user';
import { Navbar } from './Menu'
import { SignInPage } from './SignIn'
import { AuctionIndexPage }from './AuctionIndexPage';
import { AuctionShowPage } from "./AuctionShowPage"
import WelcomePage from './Welcome';
import  AuctionNewPage  from "./AuctionNewPage"
import AuthRoute from './AuthRoute';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      loading: true,
    }
  }

  componentDidMount() {
    this.getCurrentUser()
  }

  getCurrentUser = () => {
    return User.current()
      .then(user => {
        if (user.id) {
          this.setState({ currentUser: user })
        }
        this.setState({ loading: false })
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }

  signOut = () => {
    this.setState({
      currentUser: null,
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Navbar
              currentUser={this.state.currentUser}
              onSignOut={this.signOut} />
          </header>
          <Switch>
            <Route
              exact
              path="/signin"
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getCurrentUser} />
              )}
            />
            <Route
              exact
              path="/signup"
              render={routeProps => (
                <Signup {...routeProps} onSignUp={this.getCurrentUser} />
              )}
            />
            <Route exact path='/' component={WelcomePage} />
            <Route exact path="/auctions" component={AuctionIndexPage} />
            <Route path='/auctions/new' isAuthenticated={this.state.currentUser} component={AuctionNewPage} />
            <Route exact path="/auctions/:id" component={AuctionShowPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

export default App;
