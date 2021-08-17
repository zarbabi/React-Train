import React, { Component } from "react";
import Product from "./components/Product/Product";
//import "./clss.css";
import style from "./product.module.css";
class ClssTest extends Component {
  state = {
    Products: [
      { title: "java", price: "100$", id: 1 },
      { title: "html", price: "60$", id: 2 },
    ],
    count: 0,
  };

  clickHandler = (newTitle) => {
    // console.log("Hello");
    this.setState({
      Products: [
        { title: "java", price: "20$", id: 1 },
        { title: newTitle, price: "30$", id: 2 },
      ],
    });
  };

  // constructor(props){
  //   super(props);
  //   this.countHandler = this.countHandler.bind(this)
  // }
  countHandler = (id) => {
    console.log("count clicked", id);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className={style.container}>
        <h1>"hello world!"</h1>
        {this.state.Products.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              key={product.id}
              click={() => this.clickHandler("js")}
            />
          );
        })}

        <Product name="Java" price="59$">
          <p>10% OFF</p>
        </Product>

        <button className={style.product} onClick={this.clickHandler}>
          Save
        </button>

        <button className={style.product} onClick={() => this.countHandler(3)}>
          count : {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClssTest;
