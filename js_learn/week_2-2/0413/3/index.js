/*지시사항을 따라 작성해주세요*/

/*1. index.html 파일을 참고해 주어진 변수들 완성시키기*/
// [0] 붙이는 이유 : clss나 tag는 여러게 올수 있으니 분할 적용 but querySelector는 애초에 하나만 가져와서 상관 x
const target = document.querySelector('.attend'); //올바른 값을 작성해주세요.
const inputName = document.querySelector('input'); //올바른 값을 작성해주세요
const attendee = document.querySelector('#attendee'); //올바른 값을 작성해주세요.
console.log(inputName.value)
/*2. 입력받은 이름을 출석부에 나타내기*/

function attend() {
  let inpName = document.querySelector('input').value;
  attendee.innerHTML += `${inpName} <br>`;
  attendee.innerHTML += `${inputName.value} <br>`;
}
// attend에 괄호 없는 이유 : addEventListener에서 attend 는
// let attend = function () => {}이랑 똑같음
// attend()라고 치면 attend() => {} ()라고 치는거랑 같은거 -> error
target.addEventListener("click", attend);
