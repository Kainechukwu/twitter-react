import React, { useState } from "react";
import API from "../axiosAPIs"

export default function WhoToFollowItems(props) {
    const [following, setFollowing] = useState(false); 

    // if (following === true) {
    //     const [hover, setHover] = useState();
    // }

    function handleClick() {
        if (following === false) {
            const data = {
                user_id: localStorage.getItem("user_id"),
                following_id: props.user_id
            };


            API.post("/follow", data, (response) => {
                if (response.status === 200) {
                    setFollowing(true);
                }
            }, (err) => {
                console.log(err);
            });

        }
    }


    return (
        <div className="width100 borderBottom cursorPointer">
            <div style={{ padding: "12px 14px" }}>

                <div className="displayFlex" style={{ height: "45px" }}>
                    <div style={{ width: "15%", marginRight: "10px" }}>{props.img}</div>

                    <div style={{ width: "82%" }}>
                        <div className="displayFlex width100"
                            style={{
                                marginTop: "4.4px",
                                justifyContent: "space-between"
                            }}>
                            <div className="flexColumn">
                                <div className="whiteText"> <span>{props.username}</span></div>
                                <div className="smallIconsColor sansSerif"> <span>@{props.handle}</span></div>

                            </div>

                            <div className="followButton"
                                onClick={handleClick}
                                style={{ width: following ? "100px" : "76px" }}
                            >
                                <div className="blueIcon followButtonSpanDiv cursorPointer">
                                    <span className="followButtonSpan">{following ? "Following" : "Follow"}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}