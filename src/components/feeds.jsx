import React, {useState, useEffect} from "react";
import DisplayTweet from "./displayTweet";


export default function Feeds(props) {
    // console.log("PropsData: ", props.data)

    const [reload, setReload] = useState({...props.rendered});

    

    useEffect(() => {
        setReload(props.rendered);
        console.log("reload", reload)

    }, [props.rendered]);




    return (
        <div>
            {props.data.resArray.map((obj) => {


                return <DisplayTweet
                    key={obj._id}
                    _id={obj._id}
                    user_id={obj.user_id}
                    username={obj.firstName}
                    handle={obj.lastName}
                    tweet={obj.tweet}

                />

            })}
        </div>
    )
}