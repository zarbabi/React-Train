import { useState } from "react";

const WhitCount = (WrapperComponent, incrementValue) => {
  const UpdatedComponent = (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + incrementValue);
    };
    return (
      <WrapperComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
  return UpdatedComponent;
};

export default WhitCount;
