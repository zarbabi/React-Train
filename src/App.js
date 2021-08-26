//Component
import React, { Component } from "react";
//, { Component, useState }
//import TestCom from "./components/TestCom/TestCom";
import style from "./product.module.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
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

    // const prod = [...this.state.products];
    // const findProd = prod.find((p) => p.id === id);

    // if (findProd.quantity <= 1) {
    //   const filterProd = this.state.products.filter((p) => p.id !== id);
    //   this.setState({ prod: filterProd });
    // } else {
    //   findProd.quantity--;
    //   this.setState({ prod });
    // }
  };

  changeHandler = (event, id) => {
    const prod = [...this.state.products];
    const findProd = prod.find((p) => p.id === id);
    findProd.title = event.target.value;
    this.setState({ prod });
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
    return (
      <div className={style.container} id="title">
        <NavBar totalItems={this.state.products.length} />
        <ProductList
          prod={this.state.products}
          onDel={this.delHandler}
          onIncerement={this.incHandler}
          onDecrement={this.decHandler}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}

export default App;

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

// clickHandler = () => {
//   console.log("hi");
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
