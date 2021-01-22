import React, {Component} from 'react';
import Image from './Components/Image'
import './App.css';

class App extends Component{
  constructor(){
    super();

  }

  render(){
    return(
      <div className='App'>
        <Image imageurl={"https://vignette.wikia.nocookie.net/granblue-fantasy-versus/images/c/cd/Lancelot.png/revision/latest/top-crop/width/360/height/450?cb=20190327225518"}/>
      </div>
    )
  }
}

export default App;
