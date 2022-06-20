import { useReducer, useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <button
//         onClick={() => {
//           setCount((c) => c + 1);
//         }}
//       >
//         +
//       </button>
//       <p>{count}</p>
//     </>
//   );
// }

function App() {
  const countInitValue = 0; // 초기값
  const countReducer = (oldCount, action) => {
    switch (action) {
      case 'up':
        return oldCount + 1;
      case 'down':
        return oldCount - 1;
      default:
        break;
    }
  };
  const [count, countDispatch] = useReducer(countReducer, countInitValue);
  return (
    <>
      <button
        onClick={() => {
          countDispatch('up');
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          countDispatch('down');
        }}
      >
        -
      </button>
      <p>{count}</p>
    </>
  );
}
export default App;
