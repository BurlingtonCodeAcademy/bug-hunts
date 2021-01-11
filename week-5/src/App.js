import React from 'react';
import './App.css';
import { useState } from 'react';
import ColorChanger from './ColorChanger';
import DisplayBox from './DisplayBox'

function Home(props) {
  const [color, setColor] = useState('blue')

  function colorHandler(evt) {
    evt.preventDefault()
    let redVal = Math.floor(Math.random() * 256)
    let blueVal = Math.floor(Math.random() * 256)
    let greenVal = Math.floor(Math.random() * 256)

    setColor(`rgb(${redVal}, ${greenVal}, ${blueVal}, 1)`)
  }

  return (
    <div id='wrapper'>
      <ColorChanger colorHandler={colorHandler}/>
      <DisplayBox color={color}/>
    </div>
  );
}

export default Home;
