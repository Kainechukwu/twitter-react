import React from "react";

export default function MenuItem(props) {
    return (
        <div className="divHover" style={{ color: "#f21170" }}>
            <div className="displayFlex" style={{ padding: "10px" }}>
                {/* <DeleteOutlineOutlinedIcon /> */}
                {props.icon}
                <div style={{ width: "90%" }}>
                    <span
                        style={{ position: "relative", top: "2px" }}
                    >{props.spanName}</span>
                </div>

            </div>
        </div>
    )
}