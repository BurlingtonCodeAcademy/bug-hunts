# Check This Out! I Built my own Transformers!

## I can create any transformer I want! I've got Optimus Prime, and Megatron, and even Mark Whalberg! They can change form, and shout their slogans!

### Unfortunately they don't seem to work quite right...

This code implements a JavaScript class that should be able to create an object that represents a transformer. When implemented correctly you should be able to create new transformers by calling the class and passing in the name, current form, team, and any alternative forms they might have like so `let bumblebee = Transformer('Bumblebee', 'robot', 'Autobots', ['VW Bug', 'Chevy Camaro', 'robot'])`

The class can then be used to print a catch phrase to the console: `bumblebee.slogan()` and change the object's `form` property given a valid transformation: `form.changeTo('VW Bug')`

This file contains several objects, and many `console.log`s to help test the functionality of the class. When working properly it should print:

```
Transormed into t-rex
t-rex
Transormed into tank
Transormed into jet
Transormed into robot
robot
ERROR, ERROR, INVALID FORM toaster
robot
Decepticons attack!
Transormed into truck
Transormed into lamborghini
Transormed into robot
Autobots roll out!
ERROR, ERROR, INVALID FORM toaster
human
ERROR, ERROR, INVALID FORM undefined
human
Run away!
```

* Try running the program by entering `node broken-state.js` into the terminal from inside this directory
* Read the stack trace and try to figure out what's wrong in the code
* The line that throws the error might not be the main source of the bug, but it's a hint. So is the error message
* Once you've solved one error, run the program again. There are many bugs in this code so fixing one error will reveal another
* Not every bug will cause the code to error out. Many of them simply cause the program to behave... oddly
