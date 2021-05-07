import React from "react";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    // userPage: {
    //     backgroundColor: "#00334e",
    //     height: "615px"

    // }

});

export default function CenterHeader() {
    return (
        <div className="displayFlex sidePadding-16px borderBottom">
            <div className="centerHeader tbPadding16px">
                <div>
                    <span>Home</span>
                </div>

            </div>
        </div>
    )
}