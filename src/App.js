// //Phase 6 of Todo App---------- Dated-05-08-2023----
// import React from 'react';
// import TodoItem from './Components/TodoItem';
// import TodosData from './Components/TodosData';
// import Header from './Components/Header';

// class  App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       todos:TodosData
//     }
//     this.handleClick=this.handleClick.bind(this)
//   }
//   handleClick(id){
//     this.setState(prevState => {
//       const updatedtodo=prevState.todos.map(todo =>{
//         if (todo.id === id){
//           todo.completed=!todo.completed
//         }
//         return todo
//       })
//       return {todos:updatedtodo}
//     })

//   }
//   render(){

//     const todo =this.state.todos.map(item => <TodoItem key={item.id} item={item} 
//     handleClick={this.handleClick}/>);

//     return (
//       <div className='TodoList'>
//         <Header/>
//         {todo}
//       </div>
//     );
//   }
  
//   }

// export default App;

import React from 'react';
import TodosData from './Components/TodosData';
import TodoItem from './Components/TodoItem';
import Header from './Components/Header';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos:TodosData
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(id){
    this.setState(prevState =>{
      const updatedtodo=prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed =!todo.completed
        }
        return todo;

        })
        return {todos:updatedtodo}
    })
  }
  render(){
    const todo=this.state.todos.map(item => 
    <TodoItem key={item.id} item={item}
    handleClick={this.handleClick}/>)
    return(
      <div className='TodoList'>
        <Header/>
        {todo}
      </div>
    )
  }
}
export default App;
