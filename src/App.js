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
    prod: [
      { title: "j", price: "100$", id: "1", quantity: "1" },
      { title: "c", price: "87$", id: "3", quantity: "3" },
    ],
    count:0,
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
    const filterProd = this.state.prod.filter((t) => t.id !== id);
    this.setState({ prod: filterProd });
  };

  incHandler = (id) => {
    //console.log(id);
    const prod = [...this.state.prod];

    const findProd = prod.find((p) => p.id === id);
    findProd.quantity++;
    this.setState({ prod: prod });
  };

  decHandler = (id) => {
    const prod = [...this.state.prod];
    const findProd = prod.find((p) => p.id === id);

    if (findProd.quantity <= 1) {
      const filterProd = this.state.prod.filter((p) => p.id !== id);
      this.setState({ prod: filterProd });
    } else {
      findProd.quantity--;
      this.setState({ prod });
    }
  };

  changeHandler = (event, id) => {
    const prod = [...this.state.prod];
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
    console.log(prevState.count);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    console.log("App.js render");
    return (
      <div className={style.container} id="title">
        <button onClick={()=>this.setState({count: this.state.count+1})}>count : {this.state.count}</button>
        {/* <NavBar totalItems={this.state.prod.length} />
        <ProductList
          prod={this.state.prod}
          onDel={this.delHandler}
          onIncerement={this.incHandler}
          onDecrement={this.decHandler}
          onChange={this.changeHandler}
        /> */}
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
