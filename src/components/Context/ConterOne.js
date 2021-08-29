import { useContext } from "react";
import { CounterContext, CounterContextDispatcher } from "./CounterProvider";

const CounterOne = () => {
  const count = useContext(CounterContext); ///state
 const setCount = useContext(CounterContextDispatcher); ///setstate()
  return (
    <div>
      <h2>count is : {count}</h2>
      <button onClick={() => setCount(count + 1)}>add one</button>
    </div>
  );
};

export default CounterOne;
