import React from "react";
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';


export default function TrendsItem(props) {
    return (
        <div className="width100 borderBottom cursorPointer">
            <div className="flexColumn" style={{padding: "12px 14px"}}>
                <div className="displayFlex relative smallIconsColor sansSerif">
                    <span>{props.location}</span>

                    <div className="TrendsBodyIcon">
                        <div className="">
                            <MoreHorizSharpIcon style={{ fontSize: "18px", display: "flex" }} className="centerMore smallIconsColor" />
                        </div>
                    </div>
                </div>
                <div className="whiteText"><span>{props.trend}</span></div>
                <div className="smallIconsColor sansSerif"><span>{props.tweetAmount} tweets</span></div>


            </div>


        </div>
    )
}