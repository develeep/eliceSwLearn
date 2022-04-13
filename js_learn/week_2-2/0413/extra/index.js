let subBtn = document.querySelector('.submitBtn');

subBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  let inputName = document.querySelector('#name').value;
  let inputEmail = document.querySelector('#email').value;
  let inputNumber = document.querySelector('#phone').value;

  let container = document.querySelector('.container');
  container.innerHTML = '';

  let info = document.createElement('div');
  info.innerHTML = `<h1>my info</h1>
  <p>name : ${inputName}</p>
  <p>Email : ${inputEmail}</p>
  <p>phone : ${inputNumber}</p>
  `
  container.appendChild(info)
})