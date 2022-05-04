class dog {
  name:string
  species:string
  constructor(name:string,species:string){
    this.name = name
    this.species = species
  }
  bow(){
    console.log(`${this.name}(${this.species}) : BOWWOW!`);
  }
}
const bulldog : dog = new dog('Daisy','Bulldog')
bulldog.bow()