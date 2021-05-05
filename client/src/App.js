import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from "./components/Main";
import Nav from "./components/Nav";


export default class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Main} />
          <Route exact path={"/nav"} component={Nav} />
        </Switch>
      </BrowserRouter>
    );
  }
}

