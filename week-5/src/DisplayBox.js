import React from 'react'

function displayBox(props) {
  return (
    <div id='display' style={{backgroundColor: props.color}}>
      {props.color !== 'rgb(0, 0, 0, 1)' ?
        `I am: ${props.color} in RGB values`
        :
        "Try clicking the color changer!"
      }
    </div>
  )
}

export default displayBox