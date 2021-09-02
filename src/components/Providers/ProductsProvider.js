import React, { useContext, useReducer } from "react";
import { productsData } from "../../db/products";
import _ from "lodash";

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

// const initialState = [
//   { title: "j", price: "100$", id: "1", quantity: "1" },
//   { title: "c", price: "87$", id: "3", quantity: "3" },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "remove": {
      const filterProd = state.filter((t) => t.id !== action.id);
      return filterProd;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };

      if (product.quantity <= 1) {
        const filteredProduct = state.filter((item) => item.id !== action.id);
        return filteredProduct;
      } else {
        product.quantity--;
        const updatedProducts = [...state];
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }
    case "increment": {
      //1. id => ok
      //2. index
      const index = state.findIndex((item) => item.id === action.id);
      console.log(index);
      //3. clone the selected index and update the quantity
      const product = { ...state[index] };
      product.quantity++;

      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "filter": {
      const value = action.selectedOption.value;
      if (value === "") {
        return productsData;
      } else {
        const updatedProducts = productsData.filter(
          (p) => p.availableSizes.indexOf(value) > 0
        );
        return updatedProducts;
      }
    }
    case "sort": {
      const value = action.selectedOption.value;
      const products = [...state];
      if (value === "lowest") {
        return _.orderBy(products, ["price"], ["asc"]);
      } else {
        return _.orderBy(products, ["price"], ["desc"]);
      }
    }
    default:
      return state;
  }
};
const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);
  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProduct = () => useContext(ProductContext);

export const useProductAction = () => useContext(ProductContextDispatcher);
