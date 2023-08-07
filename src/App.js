// //Todo App Completed in React Framwork---------- Dated-06-08-2023----
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

// import React from 'react';

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       loading:false,
//       Character:{}
//     }
//   }
//   componentDidMount(){
//     this.setState({loading:true})
//     fetch('https://swapi.dev/api/people/1/')
//       .then(response => response.json())
//       .then(data => this.setState({
//         loading:false,
//         Character:data
//       })
//       )
//   }
//   render(){
//     const text= this.state.loading ? "loeading..." : this.state.Character.name
//     return(
//       <div>
//         {text}
//       </div>
//     )
//   }
// }
// export default App;
//---------------------------------------07-08-2023-------------------
// import React from 'react';

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       isLoading:false,
//       character:{}
//     }
//   }

//   //ComponentDidMount is a life Cycle method  in React it gets called when a component is rendered on the screen.
//   //
//   componentDidMount(){
//     this.setState({isLoading:true})
//     fetch('https://swapi.dev/api/people/1/')
//       .then(response => response.json())
//       .then(data => this.setState({
//         isLoading:false,
//         character:data
//       }))
//   }

//   render(){

//       const text= this.state.isLoading ? 'Loading.....'  : this.state.character.name
//       return(
//         <div>{text}</div>

//     )
//   }
// }
// export default App;

// // I am going to learn about foms in React
// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   //Events are used to capture actions or interactions that occur within the user interface
//   handleChange(event) {
//     // we are using the concept of synthetic events in React
//     const {name, value}=event.target
//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           //we are using controled inputs in forms here
//           value={this.state.firstName}
//           name="firstName"
//           placeholder="firstName"
//           onChange={this.handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           value={this.state.lastName}
//           name="lastName"
//           placeholder="lastName"
//           onChange={this.handleChange}
//         />
//         <h1>
//           {this.state.firstName} {this.state.lastName}
//         </h1>
//       </div>
//     );
//   }
// }

// export default App;

// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       isFriendly:false,
//       gender:'',
//       favColor:'blue'
//     };
//     this.handleChange=this.handleChange.bind(this)
//   }
//  handleChange(event){
//   // we have used synthetic events it looks like unpacking in python
//   const {name,value,type,checked} =event.target
//   type ==='checkbox' ? this.setState({[name]:checked}):this.setState({[name]:value})
//  }
//   render() {
//     return (
//       <div>
//         <input
//         // we are using controlled state in the forms
//           type="text"
//           placeholder="fistName"
//           name="firstName"
//           value={this.state.firstName}
//           onChange={this.handleChange}
//         />
//         <br/>
//         <input
//           type="text"
//           placeholder="lastName"
//           name="lastName"
//           value={this.state.lastName}
//           onChange={this.handleChange}
//         />
//         <br/>
//         <textarea
//           value={"some default values"}
//           onChange={this.handleChange}
//         />
//         <br/>
//         <label>
//           <input type="checkbox"
//             name="isFriendly"
//             checked={this.state.isFriendly}
//             onChange={this.handleChange}
//           />Is Friendly
//         </label>
//         <br/>
//         <label>
//           <input type="radio"
//             name="gender"
//             value='male'
//             checked={this.state.gender ==='male'}
//             onChange={this.handleChange}
//           />Male
//         </label>
//         <br/>
//         <label>
//           <input type="radio"
//             name="gender"
//             value='female'
//             checked={this.state.gender ==='female'}
//             onChange={this.handleChange}
//           />FeMale
//         </label>
//         <br/>
//         <select
//           value={this.state.favColor}
//           onChange={this.handleChange}
//           name="favColor">
//           <option value='blue'> blue</option>
//           <option value='green'> green</option>
//           <option value='red'> red</option>
//           <option value='black'>black</option>
//         </select>
//         <h1>{this.state.firstName} {this.state.lastName}</h1>
//         <h1>You are a {this.state.gender}</h1>
//       </div>
//     );
//   }
// }
// //-----Formik library takes your pain of forms creation in React
// export default App;

// ========================Evening of 07-08-2023==========================

import React from "react";
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age:'',
      gender: "",
      destination: "Uk",
      isVegan:false,
      isKoshar:false,
      isLactosFree:false
    
    };
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(event){
    const {name,value,type,checked} = event.target
    type ==='checkbox' ?
      this.setState({
            [name]:checked
          })
    :
    this.setState({
      [name]:value
    })
  }
  render() {
    return (
      <main>
        <form className="TodoList">
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="firstName"
          />
          <br/>
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="lastName"
          />
          <br/>
          <input
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br/>
          <label>
          <input type="radio"
            name="gender"
            value='female'
            checked={this.state.gender ==='female'}
            onChange={this.handleChange}
          />FeMale
        </label>
        <br/>
        <label>
          <input type="radio"
            name="gender"
            value='male'
            checked={this.state.gender ==='male'}
            onChange={this.handleChange}
          />Male
        </label>
        <br/>
        <label>
        <select
          value={this.state.destination}
          onChange={this.handleChange}
          name="destination">
          <option value='USA'> USA</option>
          <option value='UK'> Uk</option>
          <option value='Estonia'> Estonia</option>
          <option value='Japan'>Japan</option>
        </select>Your Destination
        </label>
        <br/>
        <label>
          <input 
            type="checkbox"
            name="isVegan"
            onChange={this.handleChange}
            checked={this.state.isVegan}
          />vegan
        </label>
        <br/>
        <label>
          <input 
            type="checkbox"
            name="isLactosFree"
            onChange={this.handleChange}
            checked={this.state.isLactosFree}
          />Is LactosFree
        </label>
        <br/>
        <label>
          <input 
            type="checkbox"
            name="isKoshar"
            onChange={this.handleChange}
            checked={this.state.isKoshar}
          />Koshar
        </label>
        <br/>
        <button>Submit</button>
        </form>
        <hr/>
        <h2>Entered Information:</h2>
        <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your Age: {this.state.age}</p>
        <p>Your gender:{this.state.gender}</p>
        <p>Your destination:{this.state.destination}</p>
        <p>Your diet:
          Vegan:{this.state.isVegan ? "Yes": "No"}</p>
          <p>Your diet:
          Koshar:{this.state.isKoshar ? "Yes": "No"}</p>
          <p>Your diet:
          LactosFree:{this.state.isLactosFree ? "Yes": "No"}</p>
      </main>
    );
  }
}
export default App;