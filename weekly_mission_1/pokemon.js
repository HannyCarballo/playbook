class Pokemon {
    constructor(name) {
    this.name = name 
    }

    sayHello(saludo){
      console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
    sayMessage(message){
        console.log(`Mi pokemon ${this.name} dice: Heey!`)  
    }
  }
  
  module.exports = Pokemon