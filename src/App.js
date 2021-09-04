import "./App.css";
import Home from "./Components/Home/Home/Home";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admains from "./Components/Admain/Admain/Admains";
import Shop from "./Components/Shop/Shop/Shop";
import Order from "./Components/Order/Order/Order";
import Login from "./Components/Login/Login/Login";

// ////////
export const UserLoginContext = createContext();
export const userOrderContext = createContext();
function App() {
  const [selcOrder, setSelcOrder] = useState({});
  const [loginUser, setLoginUser] = useState({});
  return (
    <UserLoginContext.Provider value={[loginUser, setLoginUser]}>
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
            {/* <Route path="/login">
              <Login></Login>
            </Route> */}
          </Switch>
        </Router>
      </userOrderContext.Provider>
    </UserLoginContext.Provider>
  );
}

export default App;
