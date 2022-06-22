import { useReducer, useState } from 'react';
import './styles.css';

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2
        onUp={() => {
          props.onUp();
        }}
      ></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left2</h1>
      <Left3
        onUp={() => {
          props.onUp();
        }}
      ></Left3>
    </div>
  );
}
function Left3(props) {
  return (
    <div>
      <h1>Left3</h1>
      <button
        onClick={() => {
          props.onUp();
        }}
      >
        +
      </button>
    </div>
  );
}
function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 count={props.count}></Right2>
    </div>
  );
}
function Right2(props) {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 count={props.count}></Right3>
    </div>
  );
}
function Right3(props) {
  return (
    <div>
      <h1>Right3</h1>
      <div>{props.count}</div>
    </div>
  );
}
export default function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UP':
        return {
          ...state,
          count: state.count + 1,
        };
      case 'DOWN':
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        break;
    }
  };
  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div id="app">
      <h1>Root</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <Left1
          onUp={() => {
            dispatch({ type: 'UP' });
          }}
        ></Left1>
        <Right1 count={state.count}></Right1>
      </div>
    </div>
  );
}
