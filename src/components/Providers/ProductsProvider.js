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

export const useProductAction = () => {
  const products = useContext(ProductContext);
  const setProducts = useContext(ProductContextDispatcher);

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

  return { removeHandler, incerementHandler, decrementHandler, changeHandler };
};
