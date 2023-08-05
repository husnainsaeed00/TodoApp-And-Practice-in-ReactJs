// Handling events in the React

import React from 'react'

function App(){
  return(
    <div>
<img
  src='https://images.pexels.com/photos/15831931/pexels-photo-15831931/free-photo-of-watching-the-bay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  style={{ width: '100%', height: 'auto' }}
  onMouseOver={() => console.log('Hoverd')}
/>
      <br/>
      <br/>
      <button onClick={() => console.log('clicked')}>Dare to Hit me</button>
    </div>
  )
}
export default App;
