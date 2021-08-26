import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {

  componentDidUpdate(prevProps, prevState) {
    console.log("ProductList.js componentDidUpdate");
  }
  
  renderHandel = () => {
    const { prod, onChange, onIncerement, onDecrement, onDel } = this.props;

    if (prod.length === 0) return <div>there is no ptoduct</div>;
    return prod.map((prod) => {
      return (
        <Product
          // name={prod.title}
          // price={prod.price}
          // quantity={prod.quantity}
          product={prod}
          key={prod.id}
          // click={() => this.clickH("C++")}
          onDel={() => onDel(prod.id)}
          onIncerement={() => onIncerement(prod.id)}
          onDecrement={() => onDecrement(prod.id)}
          onChange={(e) => onChange(e, prod.id)}
        />
      );
    });
  };
  render() {
    console.log("ProductList.js render");
    const { prod } = this.props;
    return (
      <div>
        {!prod.length && <div> no Product</div>}
        {this.renderHandel()}
      </div>
    );
  }
}

export default ProductList;
