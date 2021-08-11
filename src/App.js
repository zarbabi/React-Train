//Component
import React, { Component, useState } from "react";
import TestCom from "./components/TestCom/TestCom";
//import Product from "./components/Product/Product";

const test = () => {
  return (
    <div className="container" id="title">
      <h1>"hello worlds"</h1>
      <p>iufosfo</p>
      <TestCom />
    </div>
  );
};

export default test;
// const App = () => {
//   const [products, setproducts] = useState([
//     { title: "react.js", price: "77$" },
//     { title: "node.js", price: "98$" },
//   ]);
//   //console.log(stateDate);
//   const clickHandler = () => {
//     setproducts([
//       { title: "react.js", price: "7$" },
//       { title: "node.js", price: "8$" },
//     ]);
//   };
//   return (
//     <div className="container" id="title">
//       <h1>shoping app</h1>
//       <p>prouduct #1 :book 1 </p>
//       {products.map((product) => {
//         return <Product name={product.title} price={product.price} />;
//       })}
//       <button onClick={clickHandler}>save </button>
//     </div>
//   );
// };

//************************************************************************************************ */
// class App extends Component {
//   state = {
//     products: [
//       { title: "react.js", price: "77$" },
//       { title: "node.js", price: "98$" },
//     ],
//   };

//   clickHandler = () => {
//     console.log("hi");
//     this.setState({
//       products: [
//         { title: "react.js", price: "60$" },
//         { title: "node.js", price: "80$" },
//       ],
//     });
//   };
//   render() {
//     return (
//       <div className="container" id="title">
//         <h1>shoping app</h1>
//         <p>prouduct #1 :book 1 </p>
//         {this.state.products.map((product) => {
//           return <Product name={product.title} price={product.price} />;
//         })}
//         <button onClick={this.clickHandler}>save </button>
//       </div>
//     );
//   }
// }

//************************************************************************************************ */
// class App extends Component {
//   render() {
//     return (
//       <div className="container" id="title">
//         <h1>shoping app</h1>
//         <p>prouduct #1 :book 1 </p>
//         <Product name="react.js" price="100$" />
//         <Product name="node.js" price="250$" />
//         <Product name="javaScript" price="200$">
//           <p> 15% of</p>
//         </Product>
//       </div>
//     );
//   }
// }
// const App = () => {
//     return (<div className="container" id="title">
//         <h1>shoping app</h1>
//         <p>prouduct #1 :book 1 </p>
//         <Product name ="react.js" price ="100$"/>
//         <Product name ="node.js" price ="250$"/>
//         <Product name ="javaScript" price ="200$">
//             <p> 15% of</p>
//         </Product>
//     </div>
//     )

//    return React.createElement( "div", { id: "title", className: "app-title"},
//   "this is first app"
//    );
//    };

//export default App;
