import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header username="Husnain saeed" />
        <Greating />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <p>Welcome to the Class components {this.props.username}</p>
    );
  }
}

class Greating extends Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "night";
    }
    return <h1>Good {timeOfDay} to you Sir!</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
