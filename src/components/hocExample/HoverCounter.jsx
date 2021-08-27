import WhitCount from "../hoc/whitCount";
const HoverCounter = ({count, incrementCount}) => {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>hover {count} times</h2>
    </div>
  );
};

export default WhitCount(HoverCounter,5);
