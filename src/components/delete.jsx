import React from "react";
import SmButton from "./smButtons"
import API from "../axiosAPIs"
import useClickOutside from "../useClickOutside"



export default function DeleteYN(props) {
    let domNode = useClickOutside(() => {
        {props.setToggleOff()}
        // {props.menuOn()}
    })

    function handleDelete(){

        const data = {
            _id: props.tweet_id
        }

        API.delete("/deleteTweet", data, (response) => {
            if (response.status === 200) {
                // setPush(true)
                // props.history.push("/userpageReact", push);
                window.location.reload(false);
                console.log("props", props);
                console.log("has been deleted");
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
                    
                    <SmButton action={props.setToggleOff} name="cancel" background="rgb(37, 51, 65)"/>

                    <SmButton action={handleDelete} name="delete" background="#f21170"/>




                </div>
            </div>
        </div>
    )
}

