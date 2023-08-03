import React from 'react';
import jokesData from './Components/jokesData';
import Joke from './Components/Joke';

function App(){
  const jokesComponent=jokesData.map(joke => <Joke question={joke.question} punchline={joke.punchline}/>)
  return (
    <div>
      {jokesComponent}
    </div>
  )
}
export default App;