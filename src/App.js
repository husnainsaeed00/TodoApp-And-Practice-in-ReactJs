import { render } from '@testing-library/react';
import React from 'react';
// import TodoItem from './Components/TodoItem';
// import TodosData from './Components/TodosData';
// higher order functions are used and in that func
// we are using the builtIn map funcition to loop thrrough
// the json file and create a new array .
// that higher order funciton is returning 
// functional component <Product/>
// function App() {
//   const todoitem=TodosData.map(item => <TodoItem key={item.id} item={item}/> )
//   return(
//     <div className='TodoList'>
//       {todoitem}
//     </div>
//   )
// }


// after learning about functional components 
// we are going to learn about class Components of react

class App extends React.Component {
  render() {
    const date=new Date()
    return (
      <div>
        <h1>Software Engineering</h1>
      </div>
    );
  }
}

export default App;


