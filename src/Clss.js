import React, { Component } from "react";
import Product from "./components/Product/Product";

class ClssTest extends Component {
  state = {
    Products: [
      { title: "java", price: "100$", id: 1 },
      { title: "html", price: "60$", id: 2 },
    ],
  };

  clickHandler = () => {
    // console.log("Hello");
    this.setState({
      Products: [
        { title: "java", price: "20$", id: 1 },
        { title: "html", price: "30$", id: 2 },
      ],
    });
  };

  render() {
    return (
      <div>
        <h1>"hello world!"</h1>
        {this.state.Products.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              key={product.id}
            />
          );
        })}

        <Product name="Java" price="59$">
          <p>10% OFF</p>
        </Product>

        <button onClick={this.clickHandler}>Save</button>
      </div>
    );
  }
}

export default ClssTest;
