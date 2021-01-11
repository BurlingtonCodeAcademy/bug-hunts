//Boilerplate code set up correctly. No bugs here!
const readline = require('readline')
let interface = readline.createInterface(process.stdin, process.stdout)

function ask(questionText) {
  return new Promise((resolve, reject) => {
    interface.question(questionText, resolve)
  })
}

//Beware! Beyond this point lie bugs!
function adder() {
  let response = await ask("Let's add some numbers together!\nAre you ready? ")

  while (response !== 'yes') {
    response = await ask('Are you ready now? ')
  }

  let number = await ask('What number are we starting with? ')

  if(number = NaN) {
    number = await ask("Let's try this again. Please enter a number. ")
  } else {
    let addThis = await ask("Keep entering numbers to add. Then type 'done' to see the result. ")

    while (addThis !== 'done') {
      number += addThis
      
      let addThis = await ask('Enter the next number, or "done" ')
    }

    console.log(number)
  }
}