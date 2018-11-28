import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LearnProps from './components/LearnProps';

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <LearnProps />
        <Footer />
      </div>
    );
  }
}

export default App;
