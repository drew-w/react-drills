import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      text: ''
    }
  }

  handleChange = (message) => {
    this.setState({
      text: message
    })
  }

  render(){
    return(
      <div className='textBox'>
        <input type='text' onChange={ (e) => this.handleChange(e.target.value)}/>
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}

export default App;
