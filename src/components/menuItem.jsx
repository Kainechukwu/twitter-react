import React from "react";

export default function MenuItem(props) {
    return (
        <div className="divHover" style={{ color: props.color }}>
            <div onClick={props.action} className="displayFlex" style={{ padding: "10px" }}>
                {/* <DeleteOutlineOutlinedIcon /> */}
                {props.icon}
                <div style={{ width: "90%", marginLeft: "5px" }}>
                    <span
                        style={{ position: "relative", top: "2px" }}
                    >{props.spanName}</span>
                </div>

            </div>
        </div>
    )
}