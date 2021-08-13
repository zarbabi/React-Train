import React from "react";
//import "../../product.css";
import style from "../../product.module.css";
const Product = (Props) => {
  return (
    <div className={style.product}>
      <h4>products name : {Props.name}</h4>
      <h5>products price : {Props.price}</h5>
      {Props.children}
    </div>
  );
};

export default Product;
