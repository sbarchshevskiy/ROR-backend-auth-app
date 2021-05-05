import React, { Component } from 'react';
import Register from "./Register";
import Login from "./Login";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.credentialSuccess = this.credentialSuccess.bind(this);
      }

  credentialSuccess(data) {
    this.props.allowLogin(data)
    this.props.history.push("/nav");

  }

  render() {
    return (
      <div>
        <h1>{this.props.sessionStatus}</h1>
        <Register credentialSuccess={this.credentialSuccess}/>
        <Login credentialSuccess={this.credentialSuccess}/>
      </div>
    )
  }
}