 import React from "react";
 import ReactDOM from "react-dom";
 import App from "./App";
 import './index.css';
 

// class App extends React.Component {
//     render(){
//     return (
//       <div>
//         <Header username="Husnain saeed khan" /> 
//         <Greating />
//       </div> 
//     );
//   }
// }
// class Header extends React.Component{
//     render(){
//     return( <p>Welcome to the Class components {this.props.username}</p>)

// }
// }
// class Greating extends React.Component {
//     render(){
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;
//     if (hours < 12) {
//       timeOfDay = "morning";
//     } else if (hours >= 12 && hours < 17) {
//       timeOfDay = "afternoon";
//     } else {
//       timeOfDay = "night";
//     }
//     return <h1>Good {timeOfDay} to you Sir!</h1>;
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));

// return method is compulsory for the  Functional 
// Components and render method is the compulsory for the
// class components.
//return mehtod in functional components returns Xml
//render method also returs xml
//Funcional components are statelss untill we use
//React hooks
//class components are used for statefull and more complex
// web applications.