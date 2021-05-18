import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import TweetStats from "./tweetStatsCompo"

const useStyles = makeStyles({
    tweetStatsIcons: {
        display: "flex",
        fontSize: "18px",
        color: "rgb(136, 153, 166)"

    }
})

export default function DisplayTweet(props) {
    const classes = useStyles();
    // if(!props||props.tweet) return <p>No tweets</p>
    return (
        <div  style={{paddingTop: "12px"}}>
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
                            <div className="centerMoreDiv">
                                <MoreHorizSharpIcon style={{ fontSize: "18px", display: "flex" }} className="centerMore smallIconsColor" />
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
                <div style={{height:"10px"}}></div>
            </div>
        </div>
    )
}