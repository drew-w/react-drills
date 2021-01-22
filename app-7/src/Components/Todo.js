import React, {Component} from 'react';


class Todo extends Component{
    render(){
        return(
            <h2>{this.props.task}</h2>
        )
    }
}

export default Todo;