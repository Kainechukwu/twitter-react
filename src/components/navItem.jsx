import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";



const useStyles = makeStyles({
    navbarText: {
        // color: "white",
        fontFamily: "'Montserrat', sans-serif",
        // marginTop: "40px"

    },
    navbarItem: {
        display: "inline-block",
        padding: "8px 15px",
        flexDirection: "row",
        borderRadius:   "40px"
    },
    navIcon: {
        position: "relative",
        top: "3px",
        marginRight: "10px",
        display: "inline-block",
        color: "white",
        fontSize: "27px"
    }

});

function NavItem(props) {
    const classes = useStyles();

    const [hover, setHover] = useState(false)

    function handleMouseOver(){
        setHover(true)
        
    }

    function handleMouseOut(){
        setHover(false)
        

    }



    return (

        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {/* // <div><Typography variant="h6" className={classes.navbarText}>{props.name}</Typography></div>
        // style={{ marginBottom: "25px", marginRight: "20px" }} */}

            <Link  to={{ pathname: "/userpageReact" }} style={{ textDecoration: "none" }}>
                <div >
                    <div className={classes.navbarItem} style={{backgroundColor: hover ? "#1f3556" : "inherit"}}>
                        <div className={classes.navIcon} style={{color: hover? "rgba(29,161,242,1.00)": "white"}}>
                            {props.icon}
                        </div>
                        <div style={{display: "inline-block"}}>
                            <span><Typography style={{color: hover? "rgba(29,161,242,1.00)": "white"}} variant="h6" className={classes.navbarText}>{props.name}</Typography></span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default NavItem;