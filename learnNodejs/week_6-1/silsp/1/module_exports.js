// module_exports.js

//1. module.exports는 개별 함수가 아닌 객체를 통째로 exports할 때 사용합니다. exports.js와 같은 정사각형의 넓이와 둘레를 구하는 함수를 모듈을 생성하세요.
module.exports = {
  area:(width) => Math.pow(width,2),
  perimeter:(width)=>width*4,
};
