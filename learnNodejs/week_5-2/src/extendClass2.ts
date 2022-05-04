abstract class Animal {
  name: string;
  species: string;
  
  constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
  }
  
  abstract bark() : void;
}
class Dog extends Animal{
  constructor(name:string,species:string){
    super(name,'Dog-'+species)
  }
  bark(): void {
    console.log(`${this.name}(${this.species}) : BOWWOW!`);
  }
}
class Cat extends Animal {
  constructor(name:string,species:string) {
    super(name,'Cat-'+species)
  }
  bark(): void {
    console.log(`${this.name}(${this.species}) : meow!`);
  }
}
const dais: Dog = new Dog('Daisy', 'Bulldog');
dais.bark();

const cheese: Cat = new Cat('Cheese', 'Bengal');
cheese.bark();