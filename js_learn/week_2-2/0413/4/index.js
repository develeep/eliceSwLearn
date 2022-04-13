let Form = document.querySelector('#form');
let inputText = document.querySelector('#input');
let answer = document.querySelector('#answer');
Form.addEventListener('submit',(event)=>{
  event.preventDefault()
  let val = inputText.value;
  if(val){
    answer.textContent = val;
    Form.reset();
  }
  
});
