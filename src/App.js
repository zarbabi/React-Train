//Component
import React, { useState } from "react";
//, { Component, useState }
//import TestCom from "./components/TestCom/TestCom";
import style from "./product.module.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/hoc/Wrapper";
import "./App.css";
//import Product from "./components/Product/Product";

const App = () => {
  const [products, setProducts] = useState([
    { title: "j", price: "100$", id: "1", quantity: "1" },
    { title: "c", price: "87$", id: "3", quantity: "3" },
  ]);

  const removeHandler = (id) => {
    console.log("id :", { id });
    const filterProd = products.filter((t) => t.id !== id);
    setProducts(filterProd);
  };

  const incerementHandler = (id) => {
    //1. id => ok
    //2. index
    const index = products.findIndex((item) => item.id === id);
    console.log(index);
    //3. clone the selected index and update the quantity
    const product = { ...products[index] };
    product.quantity++;

    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  const decrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };

    if (product.quantity <= 1) {
      const filteredProduct = products.filter((item) => item.id !== id);
      setProducts(filteredProduct);
    } else {
      product.quantity--;
      const updatedProducts = [...products];
      updatedProducts[index] = product;
      setProducts(updatedProducts);
    }
  };

  const changeHandler = (event, id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    product.title = event.target.value;
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  return (
    <>
      <NavBar totalItems={products.filter((p) => p.quantity > 0).length} />
      <ProductList
        prod={products}
        onDel={removeHandler}
        onIncerement={incerementHandler}
        onDecrement={decrementHandler}
        onChange={changeHandler}
      />
    </>
  );
};

export default Wrapper(App, "container");
