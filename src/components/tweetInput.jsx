import React, { useState, useEffect} from "react";
// import { useHistory } from "react-router-dom";
import TweetService from "./tweetService";
import Icons from "./inputIcons"
// import { PinDropSharp } from "@material-ui/icons";
import Avatar from '@material-ui/core/Avatar';
import API from "../axiosAPIs"

// import Button from '@material-ui/core/Button';



export default function TweetInput(props) {
    const [src, setSrc] = useState();


    const [tweet, setTweet] = useState({
        tweet: ""
    });

    // const [tweeted, setTweeted] = useState(false)

    function handleChange(event) {
        const { value } = event.target;

        setTweet({
            tweet: value
        });
    }
    // console.log(tweet)

    // let history = useHistory();

    // function run(fn) {
    //     return fn
    // }

    function handleClick(event) {

        TweetService.sendTweet(tweet, (response) => {
            console.log(response);
            console.log("tweet: ", tweet)
            // history.push("/userpageReact");

            setTweet({ tweet: "" });

            // run(props.setRendered)

        }, (err) => {
            console.log(err);
        });




        event.preventDefault()
    }

    // useEffect(() => {
    //     const user_id = localStorage.getItem("user_id");
    //     API.get(`/imageUpload?user_id=${user_id}`,  (response) => {
    //         if (response.status === 200) {
             
    //             console.log("imagedata", response);
    //             const data = response.data;
    //             setSrc(`/imageUpload?user_id=${props.user_id}`)
               

    //         }
    //     }, (err) => {
    //         console.log(err)
    //     });
    // });


    return (
        <div className="tbPadding16px lrMargin">


            <div className="displayFlex">
                <div className="outerCenterImageDiv">
                    <div>
                        <Avatar 
                        // fontSize="29px"

                        />
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
                                <button className="tweetSubmit" type="submit"
                                onClick={props.setRendered}
                                >
                                    <span>Tweet</span>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}