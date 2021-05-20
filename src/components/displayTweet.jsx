import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import TweetStats from "./tweetStatsCompo"
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const useStyles = makeStyles({
    tweetStatsIcons: {
        display: "flex",
        fontSize: "18px",
        color: "rgb(136, 153, 166)"

    }
});

let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let ifHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", ifHandler);

        return () => {
            document.removeEventListener("mousedown", ifHandler);

        }
    });

    return domNode
}

export default function DisplayTweet(props) {
    const [toggleOn, setToggleOn] = useState(false);
    const classes = useStyles();

    // if(!props||props.tweet) return <p>No tweets</p>
    function handleToggle() {
        setToggleOn(function (prevValue) {
            return !prevValue
        })
    }


    let domNode = useClickOutside(() => {
        setToggleOn(false);

    });


    return (
        <div style={{ paddingTop: "12px" }}>
            <div className="borderBottom">
                <div className="lrMargin displayFlex">
                    <div className="outerCenterImageDiv">
                        <div>img</div>
                    </div>
                    <div className="flexColumn width100 fontSize15px">
                        <div className="displayFlex relative">
                            <span className="fontSizeInherit whiteText">{props.username}</span>
                            <span className="sansSerif fontSizeInherit smallIconsColor">{props.handle}</span>
                            <span className="sansSerif fontSizeInherit smallIconsColor">.</span>
                            <time className="sansSerif fontSizeInherit smallIconsColor">5m</time>


                            <div className="centerMoreMenu cursorPointer"
                                style={{ position: "absolute", display: toggleOn ? "block" : "none" }}
                                ref={domNode}

                            >
                                <div style={{color:"#f21170"}}>
                                    <div className="displayFlex" style={{ padding: "10px" }}>
                                        <DeleteOutlineOutlinedIcon />
                                        <div style={{ width: "90%" }}>
                                            <span
                                                style={{ position: "relative", top: "2px" }}
                                            >delete</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="centerMoreDiv"
                                style={{ display: toggleOn ? "none" : "block" }}
                                onClick={handleToggle}
                            >
                                <MoreHorizSharpIcon style={{ fontSize: "18px", display: "flex" }}
                                    className="centerMore smallIconsColor "

                                />
                            </div>


                        </div>
                        <div className="width100">
                            <span className="whiteText" style={{ display: "inline-flex" }}>{props.tweet}</span>
                        </div>
                        <div className="width100">
                            <div className="displayFlex " style={{ width: "84%", marginTop: "1.5%", justifyContent: "space-between" }}>
                                <TweetStats icon={<ModeCommentOutlinedIcon className={classes.tweetStatsIcons} />} />

                                <TweetStats icon={<ModeCommentOutlinedIcon className={classes.tweetStatsIcons} />} />

                                <TweetStats icon={<ModeCommentOutlinedIcon className={classes.tweetStatsIcons} />} />


                                <div style={{ width: "21px", position: "relative" }}>
                                    <div className="tweetStatsIconDiv">
                                        <ModeCommentOutlinedIcon className={classes.tweetStatsIcons} />
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: "10px" }}></div>
            </div>
        </div>
    )
}