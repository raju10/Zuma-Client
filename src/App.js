import "./App.css";
import Home from "./Components/Home/Home/Home";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Admains from "./Components/Admain/Admain/Admains";
import Shop from "./Components/Shop/Shop/Shop";
import Order from "./Components/Order/Order/Order";

// ////////
export const userOrderContext = createContext();
function App() {
  const [selcOrder, setSelcOrder] = useState({});
  return (
    <userOrderContext.Provider value={[selcOrder, setSelcOrder]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/admains">
            <Admains></Admains>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
        </Switch>
      </Router>
    </userOrderContext.Provider>
  );
}

export default App;
