import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';

export default function MobileNavbar(){
    return (
        <div className="mobileNavbarAndButton mobileNavbar">

            <div className="mobileNavbarIcons">
                <HomeIcon style={{margin: "auto"}} />
            </div>

            <div className="mobileNavbarIcons">
                <span style={{margin: "auto", fontSize: "23px"}}>#</span>
            </div>

            <div className="mobileNavbarIcons">
                <NotificationsNoneSharpIcon style={{margin: "auto"}} />
            </div>

            <div className="mobileNavbarIcons">
                <MailOutlineSharpIcon style={{margin: "auto"}} />
            </div>

        </div>
    )
}