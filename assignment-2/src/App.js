import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  Homepage,
  Category,
  Pdp,
  Cart,
  Register,
  Profile,
} from "./Pages/Index";
import { Provider, useSelector } from "react-redux";
import store from "./config/redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <>
            <Header />

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
              <Route path="/Register">
                <Register />
              </Route>
              <Route path="/Profile">
                <Profile />
              </Route>
            </Switch>
          </>
        </Router>
      </Provider>
    </>
  );
}

function Header() {
  const data = useSelector((state) => state.cart);
  return (
    <ul className="nav-menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Register">Register</Link>
      </li>
      <li>
        <Link to="/Profile">Profile</Link>
      </li>
      <li>
        <Link to="/Cart">Cart [{data.totalcart}]</Link>
      </li>
    </ul>
  );
}

export default App;
