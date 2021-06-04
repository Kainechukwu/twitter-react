import React, {useState, useEffect} from "react";
import Avatar from '@material-ui/core/Avatar';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import API from "../axiosAPIs"
export default function AccountButton(props) {

    const [src, setSrc] = useState()

    useEffect(() => {
        const user_id = localStorage.getItem("user_id");
        API.get(`/imageUpload?user_id=${user_id}`, (response) => {
            if (response.status === 200) {

                setSrc(`/imageUpload?user_id=${user_id}`)

            }
        }, (err) => {
            console.log(err)
        });
    });

    return (
        <div 
             ref={props.anchorRef}
            //  aria-haspopup={props.aria-haspopup}
            //  aria-controls={props.aria-controls}
            id="userPatch"
            onClick={props.onClick}
            role="button"
            className="displayFlex userIdPatch whiteText sansSerif"
        >
            <div className="displayFlex" style={{ width: "80%", justifyContent: "flex-start" }}>
                <div style={{ width: "24%", marginRight: "15px" }}>
                    <Avatar src={src && src} style={{ backgroundColor: "#253341", color: "rgb(136, 153, 166)" }} />
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