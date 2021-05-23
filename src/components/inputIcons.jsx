import React from "react";
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import CropOriginalOutlinedIcon from '@material-ui/icons/CropOriginalOutlined';

function Icons(){
    return(
        <div className="displayFlex tweetSubmitDiv iconsPositioning blueIcon">
            <div className="inputIcons">
                <CropOriginalOutlinedIcon style={{fontSize: "23px"}}/>
            </div>
            <div className="inputIcons">
                <GifOutlinedIcon style={{fontSize: "23px"}}/>
            </div>
            <div className="inputIcons">
                <PollOutlinedIcon style={{fontSize: "23px"}}/>
            </div>
            <div className="inputIcons">
                <SentimentSatisfiedSharpIcon style={{fontSize: "23px"}}/>
            </div>
            <div className="inputIcons">
                <ScheduleIcon style={{fontSize: "23px"}}/>
            </div>
        </div>
        

    )
}

export default Icons;