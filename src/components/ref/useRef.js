import { useState, useRef, useEffect } from "react";

const UserRefExamples = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const previousValue = useRef();
  const previousCount = useRef();

  
  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    previousValue.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);
  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <p>
        my name is {inputValue} and it used to be {previousValue.current}
      </p>

      <button onClick={() => setCount(Math.ceil(Math.random() * 100))}>
        Generate Random
      </button>
      <div>count is : {count}</div>
      <div> Previous count is : {previousCount.current}</div>
    </div>
  );
};
export default UserRefExamples;
