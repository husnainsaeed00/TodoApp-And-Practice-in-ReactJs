// //Phase 6 of Todo App---------- Dated-05-08-2023----
import React from 'react';
import TodoItem from './Components/TodoItem';
import TodosData from './Components/TodosData';
import Header from './Components/Header';

class  App extends React.Component {
  constructor(){
    super()
    this.state={
      todos:TodosData
    }
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(id){
    this.setState(prevState => {
      const updatedtodo=prevState.todos.map(todo =>{
        if (todo.id === id){
          todo.completed=!todo.completed
        }
        return todo
      })
      return {todos:updatedtodo}
    })

  }
  render(){

    const todo =this.state.todos.map(item => <TodoItem key={item.id} item={item} 
    handleClick={this.handleClick}/>);

    return (
      <div className='TodoList'>
        <Header/>
        {todo}
      </div>
    );
  }
  
  }

export default App;

// 
// import React from 'react';
// import Conditional from './Components/Conditional';


// // In conditional rendering we can use ternary operators and we 
// // we also can use and operator for the conditonal rendering 
// // its an interesting topic for advance level development.

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       isLoading:true
//     }
//   }
//   componentDidMount(){
//     setTimeout(()=>{
//       this.setState({
//         unreadMessages:['ere']
//       })
//     },100)
//   }
//   render(){
//     return(
//       <div>
//          {
//          this.state.unreadMessages && (
//         <h2>you have {this.state.unreadMessages.length} unread unreadMessages
//         </h2>) }
      
//       </div>
     
//     )
//   }
// }
// export default App;


// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       loggedIn: true,
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState((prevState) => {
//       if (prevState.loggedIn === true) {
//         prevState.loggedIn = false;
//       }
//       return { loggedIn: prevState.loggedIn };
//     });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.loggedIn && <h1>You are logged In</h1>}
//         <button onClick={this.handleClick}>Change Status</button>
//       </div>
//     );
//   }
// }

// export default App;

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
