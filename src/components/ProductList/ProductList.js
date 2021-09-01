import React from "react";
import Product from "../Product/Product";
import { useProduct } from "../Providers/ProductsProvider";

const ProductList = (props) => {
  const products = useProduct();
  const renderHandel = () => {
    const { onChange, onIncerement, onDecrement, onDel } = props;

    if (products.length === 0) return <div>there is no product</div>;
    return products.map((prod) => {
      return (
        <Product
          product={products}
          key={products.id}
          onDel={() => onDel(products.id)}
          onIncerement={() => onIncerement(products.id)}
          onDecrement={() => onDecrement(products.id)}
          onChange={(e) => onChange(e, products.id)}
        />
      );
    });
  };
  return (
    <div>
      {!products.length && <div> no Product</div>}
      {renderHandel()}
    </div>
  );
};

export default ProductList;
