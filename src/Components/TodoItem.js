import React from 'react';

function TodoItem(){
    return(
        <div className='TodoItem'>
            <input type="checkbox" name="myCheckbox" value='Put some extra time' 
                onChange={() => {}} ></input><span>Put some extra time</span><br></br>
        </div>
    )
}

export default TodoItem;