import React from 'react';



function TodoItem(props){
    const completedStyle = {
        fontStyle:'italic',
        color:'gray',
        textDecoration:'line-through'
    }
    return(
        <div className='TodoItem'>
            <input type="checkbox" checked={props.item.completed}
            onChange={() =>props.handleClick(props.item.id)}></input>
            <span style={props.item.completed ? completedStyle : null}>{props.item.text}</span><br></br>
        </div>
    )
}

export default TodoItem;

// import React from 'react';
// import TodoItem from './Components/TodoItem';
// import TodosData from './Components/TodosData';

// class  App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       todos:TodosData
//     }
//   }
//   render(){
//     const todo =this.state.todos.map(item => <TodoItem key={item.id} item={item} />);

//     return (
//       <div className='TodoList'>
//         {todo}
//       </div>
//     );
//   }
  
//   }
 
// export default App;

// Phase 4 of Todo App---------- Dated-05-08-2023----
// import React from 'react';
// import TodoItem from './Components/TodoItem';
// import TodosData from './Components/TodosData';

// class  App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       todos:TodosData
//     }
//   }
//   render(){
//     const todo =this.state.todos.map(item => <TodoItem key={item.id} item={item} />);

//     return (
//       <div className='TodoList'>
//         {todo}
//       </div>
//     );
//   }
  
//   }
 
// export default App;
