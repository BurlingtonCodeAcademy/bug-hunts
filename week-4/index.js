let userIn = document.getElementById('textIn')
let display = document.getElementById('display')
let submit = document.getElementById('submit')
let clear = document.getElementById('clear')
let boxes = document.querySelectorAll('li')

title.addEventListener('hover', (event) => {
  event.target.style.color = 'red'
})

boxes.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'blue'
})

submit.addEventListener('submit', (event) => {
  let input = userIn.textContent
  userIn.textContent = ''

  display.textContent += input
})

clear.addEventListener('click', () => {
  display.textContent = ''
})