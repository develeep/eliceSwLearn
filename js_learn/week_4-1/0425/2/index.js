const btn = document.querySelector('#buttonSubmit')
const input = document.querySelector('#inputName')
btn.addEventListener('click',(e)=>{
  e.preventDefault()
  setTimeout(() => {
    alert(input.value)
  }, 2000);
})