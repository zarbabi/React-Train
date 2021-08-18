import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
  state = {
    prod: [
      { title: "j", price: "100$", id: "1", quantity: "1" },
      { title: "c", price: "87$", id: "3", quantity: "3" },
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

  delHandler = (id) => {
    console.log("id :", { id });
    const filterProd = this.state.prod.filter((t) => t.id !== id);
    this.setState({ prod: filterProd });
  };

  addHandler = (id) => {
    const findProd = this.state.prod.find((p) => p.id === id);
    this.setState({ prod: findProd });
  };
  render() {
    return (
      <div>
        {this.state.prod.map((prod) => {
          return (
            <Product
              // name={prod.title}
              // price={prod.price}
              // quantity={prod.quantity}
              product={prod}
              key={prod.id}
              // click={() => this.clickH("C++")}
              onDel={() => this.delHandler(prod.id)}
              onAdd={() => this.addHandler(prod.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
