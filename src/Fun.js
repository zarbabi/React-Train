import React, { useState } from "react";
import Product from "./components/Product/Product";
import HookCounter from "./components/HookCounter/HookCounter";
import ClssCounter from "./components/ClssCounter";
import HookObject from "./components/HookObject";
import HookArry from "./components/HookArry";
// const FunTest = () => {
//   return (
//     <div>
//       <h1>"hello world!"</h1>
//       <Product name="java" price="88$" />
//       <Product name="React" price="109$">
//         <p>15% is Off</p>
//       </Product>
//     </div>
//   );
// };

// export default FunTest;

const FunState = () => {
  const [products, setProducts] = useState([
    { title: "java", price: "100$" },
    { title: "html", price: "60$" },
  ]);

  const clickHandler = () => {
    setProducts([
      { title: "java", price: "88$" },
      { title: "css", price: "50$" },
    ]);
  };

  return (
    <div className="container" id="title">
      <h1>Hi</h1>

      {products.map((product) => {
        return <Product name={product.title} price={product.price} />;
      })}

      {
        // <HookCounter />
        // <button onClick={clickHandler}>save</button>
        // <ClssCounter />
        //<HookObject />
      }
      <HookArry />
    </div>
  );
};

export default FunState;
