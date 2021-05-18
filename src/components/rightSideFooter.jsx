import React from "react";

export default function RightSideFooter() {
    const date = new Date().getFullYear();
    return (
        <div
            className="pageFooter"
        >
            <div>
                <a style={{ marginRight: "10px" }}><span>Terms of Service</span></a>
                <a style={{ marginRight: "10px" }}><span>Privacy Policy</span></a>
                <a style={{ marginRight: "10px" }}><span>Cookie Policy</span></a>
            </div>

            <div>
                <a style={{ marginRight: "10px" }}><span>Ads info</span></a>
                <a style={{ marginRight: "10px" }}><span>More...</span></a>
                <a style={{ marginRight: "10px" }}><span> © {date} Twitter, Inc.</span></a>
            </div>



        </div>
    )
}

//Terms of Service
// Privacy Policy
// Cookie Policy
// Ads info
// More
// © 2021 Twitter, Inc.