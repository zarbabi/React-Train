import React from "react";
//import "../../product.css";
import style from "../../product.module.css";
import { BiTrash } from "react-icons/bi";
const Product = ({product, onChange, onIncerement, onDecrement, onDel}) => {
  //product, onChange,onIncerement,onDecrement,onDel
  return (
    <div className={style.product} /*onClick={click}*/>
      <h4>products name : {product.title}</h4>
      <h5>products price : {product.price}</h5>
      {product.children}
      <input
        type="text"
        className={style.input}
        onChange={onChange}
        value={product.title}
      />
      <span className={style.value}> {product.quantity}</span>
      <button className={`${style.button} ${style.inc}`} onClick={onIncerement}>
        +
      </button>

      <button
        className={`${style.button} ${product.quantity === 1 && style.remove}`}
        onClick={onDecrement}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button className={style.button} onClick={onDel}>
        delete
      </button>
    </div>
  );
};

export default Product;
