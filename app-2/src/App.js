import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      array: ['Linne', 'Lancelot', 'Ken', 'Ky', 'Roberto']
    }
  }

  render(){
    let names = this.state.array.map((elem, index, arr) => {
      
      return <h2 key={index}>{elem}</h2>
    })
    return (
      <div className='App'>
        <h2>{names}</h2>
      </div>
    )
  }
}

export default App;
