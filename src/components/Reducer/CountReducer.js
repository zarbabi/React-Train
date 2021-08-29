import { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 1,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "add2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
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
  return (
    <div>
      <h2>count is : {count.firstCounter}</h2>
      <h2>count is : {count.secondCounter}</h2>
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
        <button onClick={() => dispatch({ type: "add2", value: 3 })}>
          add one
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          {" "}
          decrement
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default CounterOne;
