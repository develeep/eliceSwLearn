/**
 * class & interface
 */
class Animal {
  id: number;
  name: string;
  private secret: string;

  constructor(name: string) {
    this.id = Date.now();
    this.name = name;
    this.secret = "this is secret";
  }

  public getName() {
    this.logSecret();
    return this.name;
  }

  private logSecret() {
    console.log(`${this.secret}`);
  }
}

interface Machine {
  type: string;
  name: string;
  run: () => void;
  getType: () => string;
}
interface Cordinate {
  x:number;
  y:number;
}
function distance(point1:Cordinate) {
  return
}
const codi = {
  x : 1,
  y : 2,
}
distance(codi)

