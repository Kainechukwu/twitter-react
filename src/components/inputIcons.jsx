import React, { useRef, useState } from "react";
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import CropOriginalOutlinedIcon from '@material-ui/icons/CropOriginalOutlined';

function Icons(props) {

    const tweetImageInput = useRef();

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    function changeHandler(event) {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        {props.tweetImage(() => {
            return {
                imageState: {isFilePicked},
                imageSrc: event.target.files[0] && String(URL.createObjectURL(event.target.files[0]))
            }

        })}
    }

    function openUploadFolder() {
        tweetImageInput.current.click();
    }

    return (
        <div className="displayFlex tweetSubmitDiv iconsPositioning blueIcon">

            <div>
                <input
                    style={{ marginTop: "30px", display: "none" }}
                    type="file"
                    name="file"
                    onChange={changeHandler}
                    ref={tweetImageInput}
                    accept=".jpg"
                />
            </div>


            <div
                onClick={openUploadFolder}
                className="inputIcons"
            >
                <CropOriginalOutlinedIcon
                    style={{ fontSize: "23px" }}

                />
            </div>
            <div className="inputIcons">
                <GifOutlinedIcon style={{ fontSize: "23px" }} />
            </div>
            <div className="inputIcons">
                <PollOutlinedIcon style={{ fontSize: "23px" }} />
            </div>
            <div className="inputIcons">
                <SentimentSatisfiedSharpIcon style={{ fontSize: "23px" }} />
            </div>
            <div className="inputIcons">
                <ScheduleIcon style={{ fontSize: "23px" }} />
            </div>
        </div>


    )
}

export default Icons;