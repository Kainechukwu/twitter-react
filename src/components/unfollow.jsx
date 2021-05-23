import React from "react";
import SmButton from "./smButtons"
import API from "../axiosAPIs"
import useClickOutside from "../useClickOutside"



export default function UnfollowYN(props) {
    let domNode = useClickOutside(() => {
        {props.setToggleOff()}
        // {props.menuOn()}
    })

    const user_id = localStorage.getItem("user_id");


    function handleUnfollow(){

        const data = {
            user_id: user_id,
            following_id: props.user_id
        }

        API.delete("/unfollow", data, (response) => {
            if (response.status === 200) {
                // setPush(true)
                // props.history.push("/userpageReact", push);
                window.location.reload(false);
                console.log("props", props);
                console.log("has been unfollowed");
            }
        }, (err) => {
            console.log(err);
        });
        // console.log("delete")

    }


    return (
        <div className="deleteNY" style={{ display: props.toggle ? "block" : "none" }} ref={domNode}>
            <div>
                <div style={{ textAlign: "center" }}>
                    <h3>Are you sure?</h3>
                    <span className="smallIconsColor">This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results. </span>
                </div>

                <div className="displayFlex" style={{ justifyContent: "space-evenly" , margin: "10px 0 5px"}}>
                    
                    <SmButton action={props.setToggleOff} name="cancel" width="76px" background="rgb(37, 51, 65)"/>

                    <SmButton action={handleUnfollow} name="unfollow" width="90px" background="#f21170"/>




                </div>
            </div>
        </div>
    )
}

