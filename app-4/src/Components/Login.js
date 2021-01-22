import React, {Component} from 'react';


class Login extends Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    storeUsername = (input) => {
        this.setState({
            username: input
        })
    }

    storePassword = (input) => {
        this.setState({
            password: input
        })
    }

    attemptLogin = () => {
        alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`)
    }


    render(){
        return(
            <div>
                <input placeholder='Username' type='text' onChange={(e) => this.storeUsername(e.target.value)}/>
                <input placeholder='Password' type='text' onChange={(e) => this.storePassword(e.target.value)}/>
                <button onClick={this.attemptLogin}>Login</button>
            </div>
        )
    }
}

export default Login