import React, { useState, useContext } from "react";

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

const ConterProvider = ({ children }) => {
  const [count, setCount] = useState(4);
  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default ConterProvider;

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => useContext(CounterContextDispatcher);
