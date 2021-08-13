import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const oneAddHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const twoClick = () => {
    setCount((prevCount) => {
      return prevCount + 2;
    });
  };

  const fiveClick = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <h1> count {count}</h1>
      <button onClick={oneAddHandler}> Add </button>
      <button onClick={twoClick}> Two </button>
      <button onClick={fiveClick}> Five </button>
    </div>
  );
};

export default HookCounter;
