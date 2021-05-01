import React from "react";
import { Link } from "react-router-dom";


function TweetButton() {
    return (
        <div style={{ padding: "5px" }}>
            <div>
                <Link to={{ pathname: "/compose/tweet" }} style={{ textDecoration: "none" }}>
                    <div >
                        <div style={{ padding: "12px 0", borderRadius: "40px", backgroundColor: "rgba(29,161,242,1.00)" }} >

                            <div style={{ display: "block", color: "white", textAlign: "center", margin: "auto", width: "111px" }}>
                                <span>Tweet</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default TweetButton;