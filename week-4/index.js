let userIn = document.getElementById('textIn')
let display = document.getElementById('display')
let submit = document.getElementById('submit')
let clear = document.getElementById('clear')
let boxes = document.querySelectorAll('li')
let title = document.getElementById('title')

title.addEventListener('mouseover', (event) => {
  event.target.style.color = 'red'
})

boxes.forEach(box => {
  console.log(box)
  box.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'blue'
  })
})

submit.addEventListener('click', (event) => {
  event.preventDefault()
  let input = userIn.value
  console.log(input)
  userIn.textContent = ''

  display.textContent += input
})

clear.addEventListener('click', () => {
  display.textContent = ''
})