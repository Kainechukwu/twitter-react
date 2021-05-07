import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CenterHeader from "./centerHeader"
import TweetInput from "./tweetInput"
import DisplayTweet from "./displayTweet"



// const useStyles = makeStyles({
//     // userPage: {
//     //     backgroundColor: "#00334e",
//     //     height: "615px"

//     // }

// });










export default function CenterPage(props) {
    // const classes = useStyles();
    const tweetData = props.tweets.resArray;
    console.log(tweetData)
    console.log("hello")
    return (
        <div className="borderRight" style={{ width: "58%" }}>
            <div className="">
                <CenterHeader />
                <TweetInput />
                <div className="borderTop borderBottom" style={{ height: "12px", backgroundColor: "#192734" }}></div>
                <div>
                    {/* {tweetData.map((obj) => { */}
                       

                    {/* return <DisplayTweet key={obj._id} user_id={obj.user_id} username={obj.firstName} handle={obj.lastName} tweet={obj.tweet}/> */}
                {/* })} */}

                </div>

            </div>

        </div>
    )
}