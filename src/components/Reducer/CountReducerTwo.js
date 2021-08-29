import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  //   const count = useCount();
  //   const { addOne, addFive, decrement } = useCountAction();
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>count is : {count}</h2>
      <h2>count is : {countTwo}</h2>
      <div>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          {" "}
          decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatchTwo({ type: "add", value: 3 })}>
          add one
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
          {" "}
          decrement
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>resetTwo</button>
    </div>
  );
};

export default CounterOne;
