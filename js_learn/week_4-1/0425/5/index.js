// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

function showHexaCode(e) { 
    // 새로고침 방지
  
    e.preventDefault()
    
    const userInputColor = inputElem.value 
    
    // fetch -> response.json() 하는 과정은 고정입니다 (번거롭지만, 매번 해 주어야 함).
    // 물론 response 대신 res 등으로 변수명은 바꾸어도 됩니다.
    fetch('data.json')
      .then(response => response.json())
      .then((datas) => {
        const data = datas.find(data => data.color === userInputColor)
        hexaCodeElem.innerHTML = data.value;
        hexaCodeElem.style.color = data.color;
      })
  }
  
  
  const inputElem = document.querySelector('#inputColor')
  const buttonElem = document.querySelector('#buttonSubmit')
  const hexaCodeElem = document.querySelector('#hexaCode')
  
  buttonElem.addEventListener("click", showHexaCode)