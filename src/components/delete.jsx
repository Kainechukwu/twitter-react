import React from "react";
import SmButton from "./smButtons"

import useClickOutside from "../useClickOutside"



export default function DeleteYN(props) {
    let domNode = useClickOutside(() => {
        {props.setToggleOff()}
        // {props.menuOn()}
    })

    return (
        <div className="deleteNY" style={{ display: props.toggle ? "block" : "none" }} ref={domNode}>
            <div>
                <div style={{ textAlign: "center" }}>
                    <h3>Are you sure?</h3>
                    <span className="smallIconsColor">This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results. </span>
                </div>

                <div className="displayFlex" style={{ justifyContent: "space-evenly" , margin: "10px 0 5px"}}>
                    
                    <SmButton name="cancel" background="rgb(37, 51, 65)"/>

                    <SmButton name="delete" background="#f21170"/>




                </div>
            </div>
        </div>
    )
}

