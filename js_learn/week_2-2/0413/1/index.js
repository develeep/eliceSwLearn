// HTML 요소를 선택하는 법
// Css 선택자 : document.querySelector()
// ID 선택자 : document.getElementById('#id')
// Class 선택자 : document.getElementsByClassName('.class')
/*지시사항을 따라 작성해주세요*/
var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

blockOne.addEventListener('mouseenter',function(){
  blockOne.classList.add('red');
})
blockTwo.addEventListener('mouseenter',function(){
  blockTwo.classList.add('yellow');
})
blockThree.addEventListener('mouseenter',function(){
  blockThree.classList.add('green')
})