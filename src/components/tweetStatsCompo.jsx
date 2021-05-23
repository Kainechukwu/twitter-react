import React from "react";


   

export default function TweetStats(props) {
    let value = Math.floor(Math.random() * 1500)

    return (
        <div className="displayFlex ">
            <div style={{ width: "21px", position: "relative" }}>
                <div className="tweetStatsIconDiv">
                    {props.icon}
                </div>

            </div>
            <div>
                <span className="tweetStatsSpan smallIconsColor">{value}</span>
            </div>
        </div>
    )
}