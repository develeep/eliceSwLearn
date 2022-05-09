// 모듈을 함수형. 함수로 호출
// let number = 0
// module.exports = number += 1;
let number = 0
module.exports = ()=>{
  return number +=1;
}