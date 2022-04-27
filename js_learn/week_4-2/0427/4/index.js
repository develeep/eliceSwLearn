// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
const btn = document.querySelector('#buttonSubmit')
const passwordText = document.querySelector('#password')

const randomPassword = async (e)=>{
  e.preventDefault();
  const res = await fetch('https://randomuser.me/api/?password=upper,lower,number')
  const data = await res.json();
  const password = data.results[0].login.password
  passwordText.innerHTML = password
}
btn.addEventListener('click',randomPassword)
