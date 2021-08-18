import React from "react";
//import "../../product.css";
import style from "../../product.module.css";

const Product = (Props) => {
  return (
    <div className={style.product} /*onClick={Props.click}*/>
      <h4>products name : {Props.product.name}</h4>
      <h5>products price : {Props.product.price}</h5>
      {Props.children}
      <span className={style.value}> {Props.product.quantity}</span>
      <button
        className={`${style.button} ${style.inc}`}
        onClick={Props.onIncerement}
      >
        Increment
      </button>

      <button className={style.button} onClick={Props.onDecrement}>Decrement</button>
      <button className={style.button} onClick={Props.onDel}>
        delete
      </button>
    </div>
  );
};

export default Product;
