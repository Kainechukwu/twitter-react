import React from "react";
import Avatar from '@material-ui/core/Avatar';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

export default function AccountButton(props) {
    return (
        <div 
        // ref={props.buttonRef}
            onClick={props.onClick}
            role="button"
            className="displayFlex userIdPatch whiteText sansSerif"
        >
            <div className="displayFlex" style={{ width: "80%", justifyContent: "flex-start" }}>
                <div style={{ width: "24%", marginRight: "15px" }}>
                    <Avatar style={{ backgroundColor: "#253341", color: "rgb(136, 153, 166)" }} />
                </div>

                <div className="flexColumn" style={{ width: "60%" }}>
                    <div style={{ fontWeight: "700" }}>name</div>
                    <div className="smallIconsColor sansSerif">@handle</div>
                </div>


            </div>
            <div className="displayFlex" style={{ alignItems: "center" }}>
                <MoreHorizOutlinedIcon />
            </div>

        </div>
    )
}