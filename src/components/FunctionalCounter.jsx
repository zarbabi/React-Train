import React, { useState } from "react";
import { useEffect } from "react";
const FunctionalClass = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("document title updating");
    document.title = `clicked : ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={() => setCount(count + 1)}>count:{count}</button>
    </div>
  );
};

export default FunctionalClass;
