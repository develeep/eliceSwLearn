class dg {
  name: string;
  species: string;
  
  constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
  }
  
  bark() {
      console.log(`${this.name}(${this.species}) : BOWWOW!`);
  }
}

class Puppy extends dg{
  speciesBaby: string;
  constructor(name:string,species:string){
    super(name,species)
    this.speciesBaby = species+'-baby'
  }
  bark(){
    console.log(`${this.name}(${this.speciesBaby}) : bowwow!`);
  }
  }


const daisy: dg = new dg('Daisy', 'Bulldog');
daisy.bark();

const tom: Puppy = new Puppy('Tom', 'Bulldog');
tom.bark();