import React from "react";
import LandingPage from "./landingPage"
import {Route, Link} from "react-router-dom"


const date = new Date().getFullYear();



function App() {
  return (
    <div >  
    <Route exact path="/" component = {LandingPage}></Route>
    </div>
  );
}

export default App;
