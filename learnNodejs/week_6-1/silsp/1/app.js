//1. exports를 import해서 변수 getSquare에 할당하세요
const getSquare = require('./exports');
console.log(getSquare.area(5));
console.log(getSquare.perimeter(5));

//2. module_exports를 import해서 변수 getSquare2에 할당하세요.
const getSquare2 = require('./module_exports');
console.log(getSquare2.area(3));
console.log(getSquare2.perimeter(3));
