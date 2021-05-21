import React, { useState } from "react";
import API from "../axiosAPIs"

export default function WhoToFollowItems(props) {
    const [following, setFollowing] = useState(false);
    const [hover, setHover] = useState(false);

    // if (following === true) {
    //     const [hover, setHover] = useState();
    // }

    function handleMouseOver() {
        setHover(true)
    }

    function handleMouseOut() {
        setHover(false)
    }

    function FButton() {

        if (following === true) {
            return (
                <div className="followingButton"
                    onClick={handleUnfollow}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    style={{ width: "100px", backgroundColor: hover ? "#f21170" : "rgb(29, 161, 242)" }}
                >
                    <div className="whiteText followButtonSpanDiv cursorPointer">
                        <span className="followButtonSpan">{hover ? "Unfollow" : "Following"}</span>
                    </div>
                </div>
            )


        } else if (following === false) {
            return (
                <div className="followButton"
                    onClick={handleFollow}
                    style={{ width: "76px" }}
                >
                    <div className="blueIcon followButtonSpanDiv cursorPointer">
                        <span className="followButtonSpan">{following ? "Following" : "Follow"}</span>
                    </div>
                </div>
            )

        }
    }

    function handleFollow() {
        const data = {
            user_id: localStorage.getItem("user_id"),
            following_id: props.user_id
        };


        if (following === false) {

            API.post("/follow", data, (response) => {
                if (response.status === 200) {
                    setFollowing(true);

                    console.log("has been followed")
                }
            }, (err) => {
                console.log(err);
            });

        }
    }

    function handleUnfollow() {

        const data = {
            user_id: localStorage.getItem("user_id"),
            following_id: props.user_id
        };

        API.delete("/unfollow", data, (response) => {
            if (response.status === 200) {
                console.log("successfully unfollowed person")
                // console.log(response);
                setFollowing(false);
            }
        }, (err) => {
            console.log(err);
        });

    }




    return (
        <div className="width100 borderBottom cursorPointer divHover">
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

                            <FButton />
                            {/* 
                            <div className="followButton"
                                onClick={handleClick}
                                style={{ width: following ? "100px" : "76px" }}
                            >
                                <div className="blueIcon followButtonSpanDiv cursorPointer">
                                    <span className="followButtonSpan">{following ? "Following" : "Follow"}</span>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}