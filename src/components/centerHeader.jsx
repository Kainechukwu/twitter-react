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
        <div>
            <div style={{padding: "16px"}}>
                <div>
                    <span>Home</span>
                </div>

            </div>
        </div>
    )
}