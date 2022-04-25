// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
let timer;
document.querySelector("input").addEventListener("input", function (e) {
  if(timer){
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    alert(`입력 내용: ${e.target.value}`);  
  }, 1000);
});
