import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Homepage, Category, Pdp, Cart } from "./Pages/Index"

function App() {
  return (
    <>
      <Router>
        <>
          <ul className="nav-menu">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Cart">Cart</Link> </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/category">
              <Category />
            </Route>
            <Route path="/product">
              <Pdp />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
