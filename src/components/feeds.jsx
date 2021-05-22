import React, { useState, useEffect } from "react";
import DisplayTweet from "./displayTweet";
import useFetch from "react-fetch-hook";



export default function Feeds(props) {
    // const [reload, setReload] = useState({...props.rendered});

    // useEffect(() => {
    //     // setReload(props.rendered);
    //     // console.log("reload", reload)

    // }, [props.rendered])

    const user_id = localStorage.getItem("user_id");

    const { isLoading, data, error } = useFetch(
        "/userHomePage?page=1&limit=10",
        {
            headers: {
                user_id: user_id
            }
        });

    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true)

    // useEffect(() => {
    //     API.get("/userHomePage?page=1&limit=10", (response) => {
    //         console.log(response.data);

    //         setIsLoading(false)
    //         console.log("hello")
    //         setData(response.data.resArray)
    //     }, (err) => {
    //         console.log(err);
    //     })
    // }, []);



    console.log("data", data);
    console.log("isLoading", isLoading);

    if (error) {
        return <div>
            <p>Code: ${error.status}</p>
            <p>Message: ${error.statusText}</p>
        </div>
    }







    return isLoading && !data ? (
        <div>Loading...</div>
    ) : (
        <div>
            {data.resArray.map((obj) => {


                return <DisplayTweet
                    key={obj._id}
                    _id={obj._id}
                    user_id={obj.user_id}
                    username={obj.firstName}
                    handle={obj.lastName}
                    tweet={obj.tweet}
                // rendered={props.rendered}

                />

            })}
        </div>
    )
}