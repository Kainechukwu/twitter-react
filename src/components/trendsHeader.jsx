import React from "react";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

export default function TrendsHeader() {
    return (
        <div className="trendsHeader borderBottom">
            <div className="relative displayFlex whiteText trendsHeaderSpanDiv">
                <span>Trends for you</span>

                <div  className="trendsHeaderSettingsDiv">
                    <SettingsOutlinedIcon className="tweetHeaderSettingsIcon blueIcon" />
                </div>

            </div>

        </div>
    )
}