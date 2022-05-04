interface shapeInterface {
  getArea(): number;
}

interface triangleInterface extends shapeInterface {
  width: number;
  height: number;
}

interface circleInterface extends shapeInterface {
  radius: number;
}

class triangle implements triangleInterface {
  width: number;
  height: number;
  constructor(width:number,height:number){
    this.width= width
    this.height = height
  }
  getArea(){
    return (this.width*this.height)/2
  }
}

class circle implements circleInterface {
  radius: number;
  constructor(radius:number){
    this.radius = radius
  }
  getArea(): number {
      return Math.PI*this.radius*2
  }
}

const tri = new triangle(10, 5);
const cir = new circle(4);

console.log(tri.getArea());
console.log(cir.getArea());
