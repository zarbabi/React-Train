import React from "react";
import Product from "../Product/Product";
import { useProduct, useProductAction } from "../Providers/ProductsProvider";

const ProductList = (props) => {
  const products = useProduct();
  const { removeHandler, incerementHandler, decrementHandler, changeHandler } =
    useProductAction();

  const renderProduct = () => {
    if (products.length === 0) return <div>there is no product</div>;

    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={product.id}
          onDel={() => removeHandler(product.id)}
          onIncerement={() => incerementHandler(product.id)}
          onDecrement={() => decrementHandler(product.id)}
          onChange={(e) => changeHandler(e, product.id)}
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
