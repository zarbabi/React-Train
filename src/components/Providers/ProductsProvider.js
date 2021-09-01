import React, { useState, useContext } from "react";

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { title: "j", price: "100$", id: "1", quantity: "1" },
    { title: "c", price: "87$", id: "3", quantity: "3" },
  ]);
  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={setProducts}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProduct = () => useContext(ProductContext);
export const useProductAction = () => useContext(ProductContextDispatcher);
