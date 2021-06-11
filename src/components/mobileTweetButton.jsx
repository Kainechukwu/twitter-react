import React from "react";
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';


export default function MobileTweetButton() {
    return (
        <div className="tweetSubmit mobileNavbarAndButton mobileTweetButton">
            <div >
                
                <span ><CreateOutlinedIcon style={{position: "relative", top: "3px"}} className="tweetButtonIcon" /></span>
            </div>
            
        </div>
        // <div>hello</div>
    )
}