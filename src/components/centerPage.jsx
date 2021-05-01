import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CenterHeader from "./centerHeader"
import TweetInput from "./tweetInput"



const useStyles = makeStyles({
    // userPage: {
    //     backgroundColor: "#00334e",
    //     height: "615px"

    // }

});








    

export default function CenterPage(){
    const classes = useStyles();

    return(
        <div style={{width: "45%"}}>
            <div className="sidePadding-16px">
                <CenterHeader />
                <TweetInput />
            </div>
            
        </div>
    )
}