import React from "react";
const Product = (Props) => {
  return (
    <div>
      <h4>products name : {Props.name}</h4>
      <h5>products price : {Props.price}</h5>
      {Props.children}
    </div>
  );
};

export default Product;
