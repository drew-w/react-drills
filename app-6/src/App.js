import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';

class App extends Component{
  constructor(){
    super();

    this.state ={
      list: [],
      input: ''
    }
  }

  handleInputChange = (value) => {
    this.setState({input:value})
  }

  addTask = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render(){
    let list = this.state.list.map((elem, index) => {
      return <Todo key={index} task={elem}/>
    })
    return(
      <div className='App'>
        <h1>My to-do list:</h1>
        <div>
          <input value={this.state.input} type='text' placeholder='Enter new task' onChange={(e) => this.handleInputChange(e.target.value)}/>
          <button onClick={this.addTask}>Add</button>
        </div>
        <h2>{list}</h2>
      </div>
    )
  }
}

export default App;
