import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import NavItem from "./navItem"
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import ListAltSharpIcon from '@material-ui/icons/ListAltSharp';
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import TweetButton from "./tweetbutton"

const useStyles = makeStyles({
    leftSide: {
        // backgroundColor: "blue",
        width: "21%",
        height: "100%",
        marginLeft: "3%",
        borderRight:" 1px solid"


    },
    navbar: {
        margin: "0 11px",
        flexDirection: "column",
        marginTop: "10px"


    },
    twitterIconDiv: {
        width: "38px",
        paddingLeft: "5px",
        borderRadius: "40px"
       
    }

});


function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.leftSide} style={{borderColor: "#38444d"}}>
            <div className={classes.navbar}>
                <div className={classes.twitterIconDiv}><TwitterIcon style={{ fontSize: "33px", color: "rgb(29, 161, 242)" }} /></div>
                <NavItem name="Home" icon={<HomeIcon/>} />
                <NavItem name="Explore" icon="#" />
                <NavItem name="Notifications" icon={<NotificationsNoneSharpIcon />} />
                <NavItem name="Messages" icon={<MailOutlineSharpIcon />} />
                <NavItem name="Bookmarks" icon={<BookmarkBorderSharpIcon />} />
                <NavItem name="Lists" icon={<ListAltSharpIcon />} />
                <NavItem name="Profile" icon={<PersonOutlineSharpIcon />} />
                <NavItem name="More" icon={<MoreHorizSharpIcon />} />
                <TweetButton />
            </div>

        </div>
    )

}

export default Navbar;