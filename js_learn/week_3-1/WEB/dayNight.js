function night(){
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('body').style.color = 'white';
  let as = document.querySelectorAll('a');
  for(let i = 0;i<as.length;i++){
    as[i].style.color = 'white';
  }
}
// 내부 사용 함수
function day(){
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
  let as = document.querySelectorAll('a');
  for(let i = 0;i<as.length;i++){
    as[i].style.color = 'black';
  }
}
// export = 외부 사용 함수
export function dayNight(time){
  if(time === "night"){
    night();
  }
  else if(time === "day"){
    day();
  }
} 