import React from "react";
import LandingPage from "./landingPage";
import SignUp from "./signupReact";
import Login from "./loginReact";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom"


const date = new Date().getFullYear();
const PageNotFound = function () {
  return (
    <div>404!</div>

  )
}


function App() {
  return (
    <BrowserRouter>
      <div >
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/signupReact" component={SignUp}></Route>
          <Route exact path="/loginReact" component={Login}></Route>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
