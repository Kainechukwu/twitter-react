import React from "react";


   

export default function TweetStats(props) {

    return (
        <div className="displayFlex ">
            <div style={{ width: "21px", position: "relative" }}>
                <div className="tweetStatsIconDiv">
                    {props.icon}
                </div>

            </div>
            <div>
                <span className="tweetStatsSpan">27</span>
            </div>
        </div>
    )
}