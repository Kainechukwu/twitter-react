import React from "react";
import { Link } from "react-router-dom";
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';


function TweetButton(props) {
    return (
        <div style={{ padding: "5px" }}>
            <div>
                <Link to={{ pathname: "/compose/tweet" }} style={{ textDecoration: "none" }}>
                    <div >
                        <div className="tweetButtonDiv" style={{ padding: "12px 0", borderRadius: "40px", backgroundColor: "rgba(29,161,242,1.00)" }} >

                            <div style={{ display: "block", color: "white", textAlign: "center", margin: "auto", width: "50%" }}>
                                <span className="noNavIconName" >Tweet</span>
                                <span className="tweetButtonIconSpan"><CreateOutlinedIcon className="tweetButtonIcon" /></span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TweetButton;