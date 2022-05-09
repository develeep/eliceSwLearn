// 기본시행
const cal = require('./cal');
const func = require('./func')
// 한번 호출후 사라짐
console.log(cal.add(5,3))
console.log(cal.sub(5,3))
console.log(cal.mul(5,3))
console.log(func)
for (let i = 0; i < 10; i++) {
  console.log(func())
  // 중복된 기능 활용 가능
}