function myFunction(){
  let newP = document.createElement('p');
  newP.innerText = '문장 추가';
  document.querySelector('#myDIV').appendChild(newP);
}
function deleteFunction(){
  console.log(document.querySelector('#myDIV').childElementCount)
  if(document.querySelector('#myDIV').childElementCount === 0){
    return;
  }
  document.querySelector('#myDIV').lastChild.remove();

}