function displayBox(props) {
  return(
    <div id='display' backgroundcolor={props.color}>
      {if(props.color !== rgb(0, 0, 0, 1)) {
        "I am: {props.color} in RGB values"
      } else {
        "Try clicking the color changer!"
      }}
    </div>
  )
}