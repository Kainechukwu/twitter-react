import API from "../axiosAPIs";



const TweetService = ({
    sendTweet: (data, callback, errCallback) => {

        API.post("/tweet", data, callback, errCallback);
    }
});

export default TweetService;