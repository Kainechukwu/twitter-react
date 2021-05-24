import React from "react";
import CenterHeaderIcon from "./centerHeaderIcon"
import FlareOutlinedIcon from '@material-ui/icons/FlareOutlined';





export default function CenterHeader() {
    return (
        <div className="displayFlex sidePadding-16px borderBottom">
            <div className="centerHeader tbPadding16px">
                <div>
                    <span>Home</span>
                </div>


            </div>

            <CenterHeaderIcon icon={<FlareOutlinedIcon />}/>
        </div>
    )
}