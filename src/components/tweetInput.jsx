import React, {useState} from "react";
import API from "../axiosAPIs"

export default function TweetInput() {

    const [tweet, setTweet] = useState("");

    function handleChange(event){
        setTweet(event.target.value);
    }

    function handleClick(event){

        API.post("/tweet", tweet, (response) =>{
            console.log(response);
        }, (err) => {
            console.log(err);
        });


        event.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleClick}>
                <div>
                    <input onChange={handleChange} type="text" placeholder="What is happening?" value={tweet}/>
                </div>
                <button type="submit"><span>Tweet</span></button>
            </form>
        </div>
    )
}