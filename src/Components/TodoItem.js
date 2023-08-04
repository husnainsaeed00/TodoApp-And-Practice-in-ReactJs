import React from 'react';


function TodoItem(props){
    return(
        <div className='TodoItem'>
            <input type="checkbox" checked={props.item.completed}></input><span>{props.item.text}</span><br></br>
        </div>
    )
}

export default TodoItem;