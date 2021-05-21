import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import TweetService from "./tweetService";
import Icons from "./inputIcons"
// import Button from '@material-ui/core/Button';



export default function TweetInput() {



    const [tweet, setTweet] = useState({
        tweet: ""
    });

    const [tweeted, setTweeted] = useState(false)

    function handleChange(event) {
        const { value } = event.target;

        setTweet({
                tweet: value
            });
    }
    // console.log(tweet)

    // let history = useHistory();


    function handleClick(event) {

        TweetService.sendTweet(tweet, (response) => {
            console.log(response);
            console.log("tweet: ", tweet)
            // history.push("/userpageReact");

            setTweet({tweet: ""});
          



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
                            <input className="centerTweetInput whiteText"
                                onChange={handleChange}
                                type="text" placeholder="What is happening?"
                                value={tweet.tweet}
                                name="tweet"
                                autoComplete="off"
                            />
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