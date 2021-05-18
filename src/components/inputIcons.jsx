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
                <CropOriginalOutlinedIcon />
            </div>
            <div className="inputIcons">
                <GifOutlinedIcon />
            </div>
            <div className="inputIcons">
                <PollOutlinedIcon />
            </div>
            <div className="inputIcons">
                <SentimentSatisfiedSharpIcon />
            </div>
            <div className="inputIcons">
                <ScheduleIcon />
            </div>
        </div>
        

    )
}

export default Icons;