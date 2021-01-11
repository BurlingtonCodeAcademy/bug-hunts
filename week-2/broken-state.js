class Transformer {
  constructor(name, form, team, altForms) {
    this.name = name
    this.form = form;
    this.team = team;
    this.altForms = altForms
  }
  changeTo(nextForm){
    if(altForms.includes(nextForm)) {
      form = nextForm
      console.log(`Transormed into ${nextForm}`)
    } else {
      console.log('ERROR, ERROR, INVALID FORM', nextForm)
    }
  }
  slogan() {
    if(team === 'decepticons') {
      console.log('Decepticons attack!')
    } else if(team === 'autobots') {
      console.log('Autobots roll out!')
    }
  }
}

let megatron = new Transformer('Megatron', 'robot', 'decepticon', ['t-rex', 'tank', 'jet'])

let optimus = new Transformer('Optimus Prime', 'robot', 'autobot', ['truck', 'lamborghini'])

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
optimus.changeTo('lamborghini')
optimus.changeTo('robot')

optimus.slogan()

mark.changeTo('toaster')
mark.changeTo()
mark.slogan()
