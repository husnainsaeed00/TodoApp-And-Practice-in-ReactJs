import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn:true,
    };
  }

  render() {
    const { isLoggedIn } = this.state; // Destructuring the state

    return (
      <div>
        {isLoggedIn ? (
          <h1>You are currently logged in</h1>
        ) : (
          <h1>You are currently logged out</h1>
        )}
      </div>
    );
  }
}

export default App;
