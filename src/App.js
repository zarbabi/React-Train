//Component
import React, { Component } from "react";
//, { Component, useState }
//import TestCom from "./components/TestCom/TestCom";
import style from "./product.module.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import ClassTimer from "./components/ClassTimer";
import FunctionalTimer from "./components/FunctionalTimer";
import Wrapper from "./components/hoc/Wrapper";
import "./App.css";
import ClickCounter from "./components/hocExample/ClickCounter";
import HoverCounter from "./components/hocExample/HoverCounter";
import ParentComp from "./components/PureMemoComp/ParentComp";
import ClassRef from "./components/ref/ClassRef";
import FunctionalRef from "./components/ref/FunctionalRef";
import UseRef from "./components/ref/useRef";
import CounterProvider from "./components/Context/CounterProvider";
import CounterOne from "./components/Context/ConterOne";
import CountReducerTwo from "./components/Reducer/CountReducerTwo";
//import Product from "./components/Product/Product";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("app.js constructor");
  }

  state = {
    products: [
      { title: "j", price: "100$", id: "1", quantity: "1" },
      { title: "c", price: "87$", id: "3", quantity: "3" },
    ],
    isShow: true,
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
    const filterProd = this.state.products.filter((t) => t.id !== id);
    this.setState({ prod: filterProd });
  };

  incHandler = (id) => {
    //1. id => ok
    //2. index
    const index = this.state.products.findIndex((item) => item.id === id);
    console.log(index);
    //3. clone the selected index and update the quantity
    const product = { ...this.state.products[index] };
    product.quantity++;

    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products: products });
  };

  decHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };

    if (product.quantity <= 1) {
      const filteredProduct = this.state.products.filter(
        (item) => item.id !== id
      );
      this.setState({ products: filteredProduct });
    } else {
      product.quantity--;
      const products = [...this.state.products];
      products[index] = product;
      this.setState({ products });
    }
  };

  changeHandler = (event, id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.title = event.target.value;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  componentDidMount() {
    console.log("App.js componentDidMount");
    //ajax
    //products => this.setState({prod})
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App.js componentDidUpdate");
    console.log(prevState);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    console.log("App.js render");
    console.log(this.props);
    return (
      // <div className={style.container} id="title">
      <>
        <CounterProvider>
          <p>welcome to context </p>
          {/* <CounterOne /> */}
          <CounterOne />
        </CounterProvider>
        {/* <UseRef /> */}
        {/* <ClickCounter name="zahra" />
        <HoverCounter /> */}
        {/* <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
          {this.state.isShow ? "hide" : "show"}
        </button>
        {this.state.isShow && <FunctionalTimer />} */}
        {/* {this.state.isShow && <ClassTimer />} */}
        {/* <NavBar totalItems={this.state.products.length} />
            <ProductList
              prod={this.state.products}
              onDel={this.delHandler}
              onIncerement={this.incHandler}
              onDecrement={this.decHandler}
              onChange={this.changeHandler}
            /> */}
      </>
      // </div>
    );
  }
}

export default App;
