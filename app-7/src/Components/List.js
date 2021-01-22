import React, {Component} from 'react';
import Todo from './Todo';


class List extends Component{
    constructor(){
        super();

    }

    render(){
        let list = this.props.tasks.map((elem,index) => {
            return <Todo key={index} task={elem}/>
        })
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default List;