import React from "react";
import Product from "../Product/Product";
import { useProduct, useProductAction } from "../Providers/ProductsProvider";

const ProductList = (props) => {
  const products = useProduct();
  const dispatch = useProductAction();

  const renderProduct = () => {
    if (products.length === 0) return <div>there is no product</div>;

    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={product.id}
          onDel={() => dispatch({ type: "remove", id: product.id })}
          onIncerement={() => dispatch({ type: "increment", id: product.id })}
          onDecrement={() => dispatch({ type: "decrement", id: product.id })}
          onChange={(e) => dispatch({ type: "edit", id: product.id, event: e })}
        />
      );
    });
  };

  return (
    <div>
      {!products.length && <div> no Product</div>}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
