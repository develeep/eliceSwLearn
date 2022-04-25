const countDownThree = ()=>{
  console.log(3);
  setTimeout(() => {
    console.log(2)
  }, 1000);
  setTimeout(() => {
    console.log(1)
  }, 2000);
  setTimeout(() => {
    console.log('끝')
  }, 3000);

  }

countDownThree();
console.log(5)
setTimeout(() => {
  console.log('wow')
}, 0); // 0으로 하면 비동기라 무조건 마지막에 실행
console.log(6)