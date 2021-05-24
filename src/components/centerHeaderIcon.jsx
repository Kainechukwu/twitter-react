import React from "react";

export default function CenterHeaderIcon(props) {
    return (
        <div className="blueIcon relative centerHeaderIcon displayFlex" >
            <div>
                {props.icon}
            </div>
        </div>
    )
}