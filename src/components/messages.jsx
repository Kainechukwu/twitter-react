import React from "react"
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';
export default function Messages() {
    return (
        <div className="messagesFixedDiv">
            <div className="displayFlex messagesBox"
            // style={{ padding: "16px" }}
            >
                <div className="messagesOuterSpanDiv">
                    <div className="whiteText" style={{ position: "relative", top: "14px" }}>
                        <span>Messages</span>
                    </div>
                </div>

                <div className="blueIcon" style={{ width: "20%" }}>
                    <div className= "displayFlex" style={{ position: "relative", top: "5px", height: "80%" }}>
                        <div  className="messageIconsDiv">
                            <MailOutlineOutlinedIcon className="relative" style={{top: "8px"}}/>
                        </div>
                        <div  className="messageIconsDiv">
                            {/* <i data-feather="chevrons-down"></i> */}
                            <DoubleArrowOutlinedIcon className="relative" style={{top: "8px", transform: "rotate(90deg)"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}