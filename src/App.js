import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";

import Counters from "./components/counters";

import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";

// import Home from "./componentLearnRoute/home";
// import Products from "./componentLearnRoute/products";
// import Dashboard from "./componentLearnRoute/admin/dashboard";
// import Posts from "./componentLearnRoute/posts";
// import ProductDetails from "./componentLearnRoute/productDetails";
// import NotFound from "./componentLearnRoute/notFound";
// import Customers from "./components/customers";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    return (
      <React.Fragment>
        {/* <div>
          <NavBar></NavBar>

          <div className="content">
            <Switch>
              <Route path="/products/:id" component={ProductDetails}></Route>
              <Route
                path="/products"
                render={(props) => (
                  <Products sortBy="newest" {...props}></Products>
                )}
              ></Route>
              <Route path="/posts/:year?/:month?" component={Posts}></Route>
              <Route path="/admin" component={Dashboard}></Route>
              <Redirect from="/messages" to="/posts"></Redirect>
              <Route path="/not-found" component={NotFound}></Route>
              <Route path="/" exact component={Home}></Route>

              <Redirect to="/not-found"></Redirect>
            </Switch>
          </div>
        </div> */}

        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />

        <main className="container">
          <Switch>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
          {/* 
          <Counters
            counters={this.state.counters}
            onDelete={this.HadleDelete}
            onIncrement={this.HadleIncrement}
            onReset={this.HandleReset}
          ></Counters> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
