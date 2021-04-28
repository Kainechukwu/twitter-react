import React, { useState, useEffect } from "react";
import axios from "axios";
// const fetch = require('node-fetch');
import API from "./axiosAPIs"



export default function UserPage() {
    // const [data, setData] = useState([]);
    //  useEffect( () => {





    // console.log("onmount");
    //     //    await axios({
    //     //         method: "GET",
    //     //         withCredentials: true,
    //     //         url: "http://localhost:3000/userHomePage?page=1&limit=3"

    //     //     }).then(response => {

    //     //         setData(response.data)
    //     //         console.log(data);
    //     //     });



    // axios({
    //     method: "GET",
    //     withCredentials: true,
    //     url: "http://localhost:3000/userHomePage",
    //     // params: { page : 1, limit : 3}
    // }).then((response) => {
    //     console.log(response);
    //     setData(response.data)
    //     console.log(data);
    //     //     //         console.log(data);
    //     // if (response.status === 200) {
    //     //     history.push("/userpageReact");
    //     // }
    // })


    //  axios.get("http://localhost:3000/userHomePage?page=1&limit=3")
    //  .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.log(err);
    // });
    // });

    // axios.interceptors.request.use(req => {
    //     // Do something before request is sent
    //     // const user_id = localStorage.getItem("user_id");
    //     req.headers["user_id"] = localStorage.getItem("user_id");


    //     return req;

    // }, function (error) {
    //     console.log(error)
    //     // Do something with request error
    //     return Promise.reject(error);
    // });

    useEffect(() => {
        API.get("/userHomePage?page=1&limit=3", (response) => {
            console.log(response)
        }, (err) => {
            console.log(err);
        })
    }, []);



    // console.log(paginatedTweets)
    return (
        <div>userpage</div>

    )
}