import React from "react";
import Header from "./Components/Header";

function App(){
  return(
    <div>
      <Header/>
      <input type="checkbox" name="myCheckbox" value='Put some extra time' 
    checked={true} onChange={() => {}} ></input><span>Put some extra time</span><br></br>
    <input type="checkbox" name="myCheckbox" value='Put some extra time' 
    checked={true} onChange={() => {}} ></input><span>Belive in Yourself and keep working </span><br></br>
    <input type="checkbox" name="myCheckbox" value='Put some extra time' 
    checked={true} onChange={() => {}} ></input><span>Allah Knows your Intention </span><br></br>
    <input type="checkbox" name="myCheckbox" value='Put some extra time' 
    checked={true} onChange={() => {}} ></input><span>You are born to serve the community</span>
    
    </div>
    
  )
}

export default App;
