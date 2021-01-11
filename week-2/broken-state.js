class Transformer {
  constructor(name, form, team, altForms) {
    this.name = name
    this.form = form;
    this.team = team;
    this.altForms = altForms
  }
  changeTo(nextForm){
    if(this.altForms && this.altForms.includes(nextForm)) {
      this.form = nextForm
      console.log(`Transormed into ${nextForm}`)
    } else {
      console.log('ERROR, ERROR, INVALID FORM', nextForm)
    }
  }
  slogan() {
    if(this.team === 'decepticons') {
      console.log('Decepticons attack!')
    } else if(this.team === 'autobots') {
      console.log('Autobots roll out!')
    } else {
      console.log('Run away!')
    }
  }
}

let megatron = new Transformer('Megatron', 'robot', 'decepticon', ['robot', 't-rex', 'tank', 'jet'])

let optimus = new Transformer('Optimus Prime', 'robot', 'autobot', ['robot', 'truck', 'lamborghini'])

let mark = new Transformer('Mark Whalberg', 'human')

megatron.changeTo('t-rex')
console.log(megatron.form)
megatron.changeTo('tank')
megatron.changeTo('jet')
megatron.changeTo('robot')
console.log(megatron.form)
megatron.changeTo('toaster')
console.log(megatron.form)

megatron.slogan()

optimus.changeTo('truck')
console.log(optimus.form)
optimus.changeTo('lamborghini')
console.log(optimus.form)
optimus.changeTo('robot')
console.log(optimus.form)

optimus.slogan()

mark.changeTo('toaster')
console.log(mark.form)
mark.changeTo()
console.log(mark.form)
mark.slogan()
