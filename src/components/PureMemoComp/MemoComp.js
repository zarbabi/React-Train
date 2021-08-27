import React from "react";

const MemoComp = (props) => {
  console.log("MemoComp");
  return <div>memo Comp - {props.name}</div>;
};

export default React.memo(MemoComp);
