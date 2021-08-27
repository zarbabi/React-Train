import WhitCount from "../hoc/whitCount";

const ClickCounter = ({count, incrementCount,name}) => {
  return (
    <div>
      <h2 onClick={incrementCount}>clicked {count} times</h2>
    </div>
  );
};

export default WhitCount(ClickCounter,10);
