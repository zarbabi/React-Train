import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
  state = {
    prod: [
      { title: "j", price: "100$", id: "1" },
      { title: "c", price: "87$", id: "3" },
    ],
  };

  clickH = (NewT) => {
    this.setState({
      prod: [
        { title: "jj", price: "90$", id: "1" },
        { title: NewT, price: "77$", id: "3" },
      ],
    });
  };

  render() {
    return (
      <div>
        {this.state.prod.map((prod) => {
          return (
            <Product
              name={prod.title}
              price={prod.price}
              key={prod.id}
              click={() => this.clickH("C++")}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
