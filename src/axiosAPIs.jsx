import axios from "axios";

const baseUrl = "http://localhost:3000"

axios.interceptors.request.use(req => {
    // Do something before request is sent
    // const user_id = localStorage.getItem("user_id");
    req.headers["user_id"] = localStorage.getItem("user_id");


    return req;

}, function (error) {
    console.log(error)
    // Do something with request error
    return Promise.reject(error);
});


const API = ({


    
    get: (url, callback, errCallback) => {
        axios({
            "method": "GET",
            "withCredentials": true,
            "url": baseUrl + url
            
    
        }).then(callback)
        .catch(errCallback);
    },


    post: (url, data, callback, errCallback) => {
        axios({
            "method": "POST",
            "data": data,
            "withCredentials": true,
            "url": baseUrl + url
            // headers: {
            //     'Authorization': `Basic ${token}`
            // }
    
        }).then(callback)
        .catch(errCallback);
    }
});

export default API;