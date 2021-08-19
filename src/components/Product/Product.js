import React from "react";
//import "../../product.css";
import style from "../../product.module.css";
import { BiTrash } from "react-icons/bi";
const Product = (Props) => {
  return (
    <div className={style.product} /*onClick={Props.click}*/>
      <h4>products name : {Props.product.title}</h4>
      <h5>products price : {Props.product.price}</h5>
      {Props.children}
      <input
        type="text"
        className={style.input}
        onChange={Props.onChange}
        value={Props.product.title}
      />
      <span className={style.value}> {Props.product.quantity}</span>
      <button
        className={`${style.button} ${style.inc}`}
        onClick={Props.onIncerement}
      >
        +
      </button>

      <button
        className={`${style.button} ${
          Props.product.quantity === 1 && style.remove
        }`}
        onClick={Props.onDecrement}
      >
        {Props.product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button className={style.button} onClick={Props.onDel}>
        delete
      </button>
    </div>
  );
};

export default Product;
