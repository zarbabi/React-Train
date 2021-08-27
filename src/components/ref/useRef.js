import { useState, useRef, useEffect } from "react";

const UserRefExamples = () => {
  const [inputValue, setInputValue] = useState("");
  const previousValue = useRef();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };
  console.log("re-render", inputValue);
  console.log("Prev-value", previousValue.current);

  useEffect(() => {
    previousValue.current = inputValue;
    console.log("useEffect", previousValue.current);
  }, [inputValue]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <p>
        my name is {inputValue} and it used to be {previousValue.current}
      </p>
    </div>
  );
};
export default UserRefExamples;
