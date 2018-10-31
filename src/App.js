import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HandlingEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { fname: '', lname: '', name: ''};
    this.handleChangeFName = this.handleChangeFName.bind(this);
    this.handleChangeLName = this.handleChangeLName.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeFName(e) {
    this.setState({fname: e.target.value});
  }

  handleChangeLName(e) {
    this.setState({lname: e.target.value});
  }

  handleClick(e) {
    var fullname = 'Welcome ' + this.state.fname + ' ' + this.state.lname + '!';
    this.setState({name: fullname});
  }

  render() {
    return (
    <div>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React</p>
      </div>
      <h2>Get Full Name</h2>
      <hr />
      <label>First Name:  </label>
      <input type="text" value={this.state.fname} onChange={this.handleChangeFName} />
      <br />
      <label>Last Name: </label>
      <input type="text" value={this.state.lname} onChange={this.handleChangeLName} />
      <br />
      <input type="button" value="Submit" onClick={this.handleClick} />
      <hr />
      <h3>{this.state.name}</h3>
    </div>
    );
  }
}

export default HandlingEvent;
