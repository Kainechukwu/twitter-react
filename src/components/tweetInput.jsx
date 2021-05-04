import React, { useState } from "react";
import TweetService from "./tweetService";
import Icons from "./inputIcons"
// import Button from '@material-ui/core/Button';



export default function TweetInput() {

    const [tweet, setTweet] = useState({
        tweet: ""
    });

    function handleChange(event) {
       const {value} = event.target;

        setTweet(()=> {
            return{
                tweet: value
            }
        });
    }
    // console.log(tweet)

    function handleClick(event) {

        TweetService.sendTweet(tweet, (response) => {
            // console.log(response);
        }, (err) => {
            console.log(err);
        });

        


        event.preventDefault()
    }

    return (
        <div className="tbPadding16px lrMargin">


            <div className="displayFlex">
                <div className="outerCenterImageDiv">
                    <div>
                        img
                </div>
                </div>
                <div className="formDiv">


                    <form onSubmit={handleClick}>

                        <div className="topAndBottomPadding">
                            <input className="centerTweetInput" onChange={handleChange} type="text" placeholder="What is happening?" value={tweet.value} name="tweet"/>
                        </div>

                        <div className="displayFlex buttonAndIconsDiv">
                            <Icons />
                            <div className="tweetSubmitDiv">
                                <button className="tweetSubmit" type="submit"><span>Tweet</span></button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}