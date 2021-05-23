import React from "react";

export default function SmButton(props){
    const bc=props.background
    return(
        <div className="smButtons"
        // onClick={handleFollow}
        style={{ width: "76px", backgroundColor:bc}}
    >
        <div className=" followButtonSpanDiv cursorPointer">
            <span className="followButtonSpan">{props.name}</span>
        </div>
    </div>
    )
}