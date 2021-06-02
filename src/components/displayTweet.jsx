import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import TweetStats from "./tweetStatsCompo"
import Avatar from '@material-ui/core/Avatar';
// import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Menu from "./menu"
import API from "../axiosAPIs"
// import fileDownload from 'js-file-download';

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
    const [src, setSrc] = useState();
    // const [rendered, setRendered] = useState({...props.render})
    const classes = useStyles();

    // if(!props||props.tweet) return <p>No tweets</p>
    function handleToggle() {
        setToggleOn(function (prevValue) {
            return !prevValue
        })
    }

    // function menuOn(){
    //     setToggleOn(true)
    // }


    let domNode = useClickOutside(() => {
        setToggleOn(false);

    });

    useEffect(() => {
        API.get(`/imageUpload?user_id=${props.user_id}`,  (response) => {
            if (response.status === 200) {
             
                console.log("imagedata", response);
                const data = response.data;
                setSrc(`/imageUpload?user_id=${props.user_id}`)
               

            }
        }, (err) => {
            console.log(err)
        });
    });

    // const imageData = `/imageUpload?user_id=${props.user_id}`


    return (
        <div className= {toggleOn ? "" : "divHover cursorPointer"} style={{ paddingTop: "12px" }}>
            <div className="borderBottom">
                <div className="lrMargin displayFlex">
                    <div className="outerCenterImageDiv">
                        <Avatar src={src && src}/>
                    </div>
                    <div className="flexColumn width100 fontSize15px">
                        <div className="displayFlex relative">
                            <span className="whiteText margin5px sansSerif fontWeight700 fontSize17">{props.username}</span>
                            <span className="sansSerif fontSizeInherit smallIconsColor margin5px">{props.handle}</span>
                            <span className="sansSerif fontSizeInherit smallIconsColor margin5px">.</span>
                            <time className="sansSerif fontSizeInherit smallIconsColor">{props.date}</time>


                        {/* ---------------------MENU----------------------- */}
                            <Menu domNode={domNode} toggleOn={toggleOn} user_id={props.user_id} tweet_id={props._id} menuOn={() => setToggleOn(true)}/>

                            <div className="centerMoreDiv"
                                style={{ display: toggleOn ? "none" : "block" }}
                                onClick={handleToggle}
                            >
                                <MoreHorizSharpIcon style={{ fontSize: "18px", display: "flex" }}
                                    className="centerMore smallIconsColor "

                                />
                            </div>


                        </div>
                     
                     {/* -----------------------tweet text------------------------------- */}
                        <div className="width100">
                            <span className="whiteText sansSerif fontWeight700" style={{ display: "inline-flex" }}>{props.tweet}</span>
                        </div>


                        <div className="width100">
                            <div className="displayFlex " style={{ width: "84%", marginTop: "1.5%", justifyContent: "space-between" }}>
                                <TweetStats icon={<ModeCommentOutlinedIcon className={classes.tweetStatsIcons} />} />

                                <TweetStats icon={<RepeatRoundedIcon style={{transform: "rotate(90deg)"}} className={classes.tweetStatsIcons} />} />

                                <TweetStats icon={<FavoriteBorderIcon className={classes.tweetStatsIcons} />} />


                                <div style={{ width: "21px", position: "relative" }}>
                                    <div className="tweetStatsIconDiv">
                                        <PublishOutlinedIcon  className={classes.tweetStatsIcons} />
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