import React, { Component } from 'react';
import './App.css';

import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      ken: ''
    }
  }

  componentDidMount() {
    axios.get('https://secure-hamlet-19722.herokuapp.com/api/v1/characters/Ken/').then(response => {
      this.setState({
        ken: response.data,
      })
    })
  }

  render() {

    let kenObj = this.state.ken[0]
    if (kenObj) {
      return (
        <div className='App'>
          <h1>Name: {kenObj.name}</h1>
          <img src={kenObj.head_shot} alt='Ken Masters' />
          <h1>Universe: {kenObj.universe}</h1>
        </div>
      )
    }
    else {
      return <div></div>
    }
  }
}

export default App;
