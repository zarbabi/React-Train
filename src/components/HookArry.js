import { useState } from "react";

const HookArry = () => {
  const [item, setItem] = useState([]);

  const ArryHandler = () => {
    const addedItem = {
      id: item.length,
      number: Math.floor(Math.random() * 10),
    };

    const updateItem = [...item, addedItem];

    setItem(updateItem);
    // setItem([
    //   ...item,
    //   { id: item.length, number: Math.floor(Math.random() * 10) },
    // ]);
  };

  return (
    <div>
      <button onClick={ArryHandler}>Add Hook Arry </button>
      {item.map((item) => {
        return <li key={item.id}>{item.number}</li>;
      })}
    </div>
  );
};

export default HookArry;
