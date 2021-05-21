import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import CenterHeader from "./centerHeader"
import TweetInput from "./tweetInput"
// import DisplayTweet from "./displayTweet"



// const useStyles = makeStyles({
//     // userPage: {
//     //     backgroundColor: "#00334e",
//     //     height: "615px"

//     // }

// });










export default function CenterPage(props) {
    // const classes = useStyles();
    // const tweetData = props.tweets.resArray;
    // console.log(tweetData)
    // console.log("hello")
    return (
        
            <div className="">
                <CenterHeader />
                <TweetInput setRendered={props.setRendered}/>
                <div className="borderTop borderBottom" style={{ height: "12px", backgroundColor: "#192734" }}></div>
                {/* <div>
                   

                </div> */}

            </div>

        
    )
}