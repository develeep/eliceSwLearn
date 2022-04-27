const timer=(callback,time)=>{
  setTimeout(() => {
    callback(time);
    
  }, time);
}

function timerP(time){
  return new Promise(function(resolve){
      setTimeout(function(){
          resolve(time);
      }, time);
  });
}

async function timerP(time){
  return new Promise(function(resolve){
      setTimeout(function(){
          resolve(time);
      }, time);
  });
}
const t = await timerP(1000); 
console.log(t);