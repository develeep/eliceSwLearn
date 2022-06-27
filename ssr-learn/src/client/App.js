import React, { useState } from "react";

function App(){
  const [count,setCount] = useState(0)

  const DecreaseClick = ()=>setCount(count-1)
  const IncreaseClick = ()=>setCount(count+1)

  return (
    <div>
      <div>
        Count : {count}
      </div>
      <div>
        <button onClick={DecreaseClick}>Decrease</button>
        <button onClick={IncreaseClick}>Increase</button>
      </div>
    </div>
  )
}

export default App