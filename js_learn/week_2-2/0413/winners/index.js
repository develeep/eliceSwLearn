



const btn = document.querySelector('.btn')
btn.addEventListener('click',function(){
  let names = ['a','b','c','d','e','f','g'];
  let winners = [];
  console.log('1')
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * names.length);
    winners.push(names[random])
    names.concat(names.splice(random,1));
  }
  console.log(winners)
  const p  = document.querySelector('.win')
  p.innerHTML = winners
})