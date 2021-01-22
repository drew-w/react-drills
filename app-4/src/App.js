import React, {Component} from 'react';
import Login from './Components/Login'
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className='App'>
        <Login/>
      </div>
    )
  }
}

export default App;
