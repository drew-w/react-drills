import React, { Component } from 'react';


class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            input: ''
        }
    }

    handleChange = (newInput) => {
        this.setState({
            input: newInput
        })
    }

    addTask = () => {
        this.props.add(this.state.input)
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div>
                <input 
                value={this.state.input} 
                type='text' placeholder='Enter new task here!'
                onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={this.addTask}>Add</button>
            </div>
        )
    }
}

export default NewTask;

