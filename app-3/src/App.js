import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      array: ['linne', 'lancelot', 'ken', 'ky', 'roberto'],
      filteredArray: []
    }
  }

  filterArray = (input) => {
    this.setState({filteredArray: input})

  }

  render() {
    let namesShowing = this.state.array
    .filter((elem, index) => {
      return elem.includes(this.state.filteredArray)
    })
    .map((elem, index) => {

      return <h2 key={index}>{elem}</h2>
    })
    return (
      <div className='App'>
        <input type='text' onChange={(e) => this.filterArray(e.target.value)}/>
        <h2>{namesShowing}</h2>
      </div>
    )
  }
}

export default App;
