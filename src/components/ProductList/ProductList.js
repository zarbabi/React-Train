import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
  renderHandel = () => {
    if (this.props.prod.length === 0) return <div>there is no ptoduct</div>;
    return this.props.prod.map((prod) => {
      return (
        <Product
          // name={prod.title}
          // price={prod.price}
          // quantity={prod.quantity}
          product={prod}
          key={prod.id}
          // click={() => this.clickH("C++")}
          onDel={() => this.props.onDel(prod.id)}
          onIncerement={() => this.props.onIncerement(prod.id)}
          onDecrement={() => this.props.onDecrement(prod.id)}
          onChange={(e) => this.props.onChange(e, prod.id)}
        />
      );
    });
  };
  render() {
    return (
      <div>
        {/* {!this.props.prod.length && <div> no Product</div>} */}
        {this.renderHandel()}
      </div>
    );
  }
}

export default ProductList;
