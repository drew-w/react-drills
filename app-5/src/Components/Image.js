import React, {Component} from 'react';



class Image extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <img src={this.props.imageurl} alt='a cool thing!'/>
                <div>Lance</div>
            </div>
        )
    }
}

export default Image