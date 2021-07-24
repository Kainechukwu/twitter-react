import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import TweetService from "./tweetService";
import Icons from "./inputIcons";
import Avatar from '@material-ui/core/Avatar';
import API from "../axiosAPIs"
import { set } from "local-storage";

// import Button from '@material-ui/core/Button';



export default function TweetInput(props) {
    const [src, setSrc] = useState();

    const [tweetImage, setTweetImage] = useState({
        imageState: false,
        imageSrc: ""

    })


    const [tweet, setTweet] = useState({
        tweet: "",
        tweetImageFile: null
    });


    function handleChange(event) {
        const { value } = event.target;

        setTweet((prev) => {
            return {
                tweet: value,
                tweetImageFile: prev.tweetImageFile
            }
        });
    }

    // function setImage(imageFile) {
    //     // if (tweet.tweetImageFile !== null) {
    //     console.log("imageFile: ", imageFile);
    //     const data = new FormData();
    //     data.append("file", imageFile);

    //     console.log("data: ", data);

    //     setTweet((prev) => {
    //         return {
    //             tweet: prev.tweet,
    //             tweetImageFile: new FormData().append("file", imageFile)
    //         }
    //     });

    //     console.log("TweetImageFile: ", tweet.tweetImageFile);
    //     // }
    // }


    function handleClick(event) {
        const data = new FormData();

        // console.log("TweetImageFile: ", tweet.tweetImageFile);

        // if(!tweet.tweetImageFile === null){
            // data.append("file", tweet.tweetImageFile);

        // }

        data.append("file", tweet.tweetImageFile);
        data.set("data", tweet.tweet);

        console.log("finalData: ", data)

        // console.log("tweet: ", tweet)
        TweetService.sendTweet(data, (response) => {
            console.log(response);
            // console.log("tweet: ", tweet)
            // history.push("/userpageReact");

            setTweet(() => {
                return {
                    tweet: "",
                    tweetImageFile: null
                }
            });

            // run(props.setRendered)

        }, (err) => {
            console.log(err);
        });




        // event.preventDefault()
    }

    useEffect(() => {
        const user_id = localStorage.getItem("user_id");
        API.get(`/imageUpload?user_id=${user_id}`, (response) => {
            if (response.status === 200) {

                setSrc(`/imageUpload?user_id=${user_id}`)

            }
        }, (err) => {
            console.log(err)
        });
    });




    return (
        <div className="tbPadding16px lrMargin">


            <div className="displayFlex">
                <div className="outerCenterTweetInputImageDiv">
                    <div >
                        <Avatar
                            style={{ width: "50px", height: "50px" }}
                            src={src && src}
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

                        <div style={{ display: tweetImage.imageState ? "flex" : "none", height: "280px", justifyContent: "center" }}>
                            <div style={{ width: "80%", height: "100%" }}>
                                <img src={tweetImage.imageSrc} alt="Tweet Image" className="tweetImage" />
                            </div>
                        </div>



                        <div className="displayFlex buttonAndIconsDiv">
                            <Icons
                                tweetImage={setTweetImage}
                                // tweet={setTweet}
                                // setImage={setImage}

                                setTweet={setTweet}

                            />
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