import React from "react";
import WhoToFollowHeader from "./whoToFollowHeader";
import WhoToFollowItems from "./whoToFollowItems";
import TrendsFooter from "./trendsFooter";
import useFetch from "react-fetch-hook";


export default function WhoToFollow() {
    const user_id = localStorage.getItem("user_id");

    const { isLoading, data, error } = useFetch(
        "/whoToFollow",
        {
            headers: {
                user_id: user_id
            }
        });



    console.log("who to follow data", data);
    console.log("isLoading", isLoading);


    if (error) {
        return <div>
            <p>Code: ${error.status}</p>
            <p>Message: ${error.statusText}</p>
        </div>
    }



    return isLoading && !data ? (
        <div className="width100 trends" style={{ marginTop: "16px" }}>
            <div className="width100">
                <WhoToFollowHeader />
                <div>Loading...</div>
                <TrendsFooter />
            </div>
        </div>

    ) : (
        <div className="width100 trends" style={{ marginTop: "16px" }}>
            <div className="width100">
                <WhoToFollowHeader />
                {data.map((obj) => {
                    return <WhoToFollowItems
                        img="img"
                        key={obj._id}
                        user_id={obj._id}
                        username={obj.firstName} 
                        handle={obj.lastName} 

                    />

                })}
                <TrendsFooter />
            </div>
        </div>
    )
}