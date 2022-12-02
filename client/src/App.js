//import logo from './logo.svg';
import "./App.css";
// import Header from "./component/Header";
//import Login from './component/Login';
import CartItem from "./component/CartItem";
import Signup from "./component/Signup";
import React from "react";
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Fashion from "./component/Fashion";
// import {Switch} from 'react-router';
import data from "./data.json";
import Mobiles from "./component/Mobiles";
import Laptop from "./component/Laptop";
// import React from "react"
import Login from "./component/Login";
// import Signup from './component/Signup'
import Home from "./component/Home"
import Shoes from './component/Shoes'
import Bag from './component/Bag'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pages: {
        fashion: data.fashion,
        // cartItems:[],
        // size:"",
        // sort:"",
        bags:data.bags,
        mobiles: data.mobile,
        laptops: data.laptop,
        shoes:data.shoes
      },
      // changepath: false,
    };
  }

  // changepage = (value) => {
  //   this.setState({
  //     changepath: value,
  //   });
  // };
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* <Route exact path="/">
              {console.log(this.state.changepath)}
              {this.state.changepath ? (
                <CartItem />
              ) : (
                <Login changepage={this.changepage} />
              )}
              {console.log(this.state.changepath)}
            </Route> */}
            <Route exact path="/">
              <CartItem />
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
             <Route exact path='/home'><Home/></Route>
            <Route exact path="/fashion">
              <Fashion fashion={this.state.pages.fashion} />
            </Route>
            <Route exact path="/mobile">
              <Mobiles mobile={this.state.pages.mobiles} />
            </Route>
            <Route eaxct path="/laptop">
              <Laptop laptop={this.state.pages.laptops} />
            </Route>
            <Route eaxct path="/shoes">
              <Shoes shoes={this.state.pages.shoes} />
            </Route>
            <Route eaxct path="/bags">
              <Bag bags={this.state.pages.bags} />
            </Route>
           
           
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
