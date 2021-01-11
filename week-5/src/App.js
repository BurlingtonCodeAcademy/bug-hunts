import React from 'react';
import './App.css';

function Home(props) {
  useState({color: 'blue'})

  function colorHandler(evt) {
    evt.preventDefault()
    let redVal = Math.floor(Math.random() * 256)
    let blueVal = Math.floor(Math.random() * 256)
    let greenVal = Math.floor(Math.random() * 256)

    this.setState({ color: rgb(redVal, greenVal, blueVal, 1) })
  }

  return (
    <div id='wrapper'>
      <ColorChanger />
      <DisplayBox />
    </div>
  );
}

export default App;
