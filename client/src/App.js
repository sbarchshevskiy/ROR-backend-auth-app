import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from "./components/Main";
import Nav from "./components/Nav";


export default class App extends Component{
  constructor() {
    super();

    this.state = {
      sessionStatus: "signed out",
      user: {}
    };

    this.allowLogin = this.allowLogin.bind(this);
  }

  allowLogin(data) {
    this.setState({
      sessionStatus: "signed in",
      user: data.user
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/"}
            render={props => (
              <Main {...props} allowLogin={this.allowLogin} sessionStatus={this.state.sessionStatus} />
            )}
          />
          <Route
            exact
            path={"/nav"}
            render={props => (
              <Nav {...props}  sessionStatus={this.state.sessionStatus}/>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

