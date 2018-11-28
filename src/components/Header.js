import React, { Component } from 'react';
import logobeauty from '../logobeauty.png';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#section"><img src={logobeauty} className="App-logo" alt="logo"/>ITJob</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sectionnavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" style={{width: 30 + 'rem'}} placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#section">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section">Login</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#section" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#section">Account</a>
                <a className="dropdown-item" href="#section">Settings</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#section">Log Out</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
