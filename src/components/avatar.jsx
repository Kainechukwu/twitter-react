import React from "react";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';


export default function Avatar(props){
    
    return(
        <div className="avatar smallIconsColor"><PersonOutlineOutlinedIcon style={{fontSize: props.fontSize}}/></div>

    )
}