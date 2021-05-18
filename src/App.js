import React from "react";
import LandingPage from "./landingPage";
import SignUp from "./signupReact";
import Login from "./loginReact";
import UserPage from "./userpageReact"
import axios from "axios"

import { BrowserRouter, Route, Switch} from "react-router-dom"


// const date = new Date().getFullYear();
const PageNotFound = function () {
  return (
    <div>404!</div>

  )
}

// let axiosInstance = axios.create({
//   baseURL: "http://localhost:4000",
//   timeout: 10000,
// });

// axiosInstance.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   // const user_id = localStorage.getItem("user_id");
//   config.headers["user_id"] = localStorage.getItem("user_id");


//   return config;

// }, function (error) {
//   console.log(error)
//   // Do something with request error
//   return Promise.reject(error);
// });



// axios.interceptors.request.use(req => {
//   // Do something before request is sent
//   // const user_id = localStorage.getItem("user_id");
//   req.headers["user_id"] = "hello"//localStorage.getItem("user_id");
//   console.log(req)

//   return req;

// }, function (error) {
//   console.log(error)
//   // Do something with request error
//   return Promise.reject(error);
// });


function App() {
  return (
    <BrowserRouter>
      <div >
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/signupReact" component={SignUp}></Route>
          <Route exact path="/loginReact" component={Login}></Route>
          <Route exact path="/userpageReact" component={UserPage}></Route>

          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
