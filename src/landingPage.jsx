import React from "react"
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// import Button from '@material-ui/core/Button';
// © 2021 Twitter, Inc.

const useStyles = makeStyles({
    typographyStyle1: {
        color: "black",
        fontFamily: "'Montserrat', sans-serif",
        marginTop: "40px"
    },

    typographyStyle2: {
        color: "black",
        fontFamily: "'Montserrat', sans-serif",
        marginTop: "40px",
        
    }

    // buttonStyle1: {
    //     color: "white",
    //     backgroundColor: "red"
    //     // width: "30px"
        

    // }
});

function LandingPage() {
    const classes = useStyles();
    return (
        <div className="displayFlex displayFlexColumn">
            <div className="flex-left-page">
                <div>
                    <TwitterIcon viewBox="0 0 24 24" style={{ fontSize: 300, color: "white" }} />

                </div>
            </div>
            <div className="page padding16px relative">

                <TwitterIcon  style={{ fontSize: 50, color: "#74cce6"}} />

                <Typography variant="h2"

                    className={classes.typographyStyle1}
                >Happening now</Typography>

                <Typography 
                variant="h4"
                className={classes.typographyStyle2}
                >Join Twitter Today.</Typography>


                {/* <Button variant="contained" size = "large"className={classes.buttonStyle1}>Sign up</Button> */}
                <div className="flexColumn">
                    <div>
                        <Link>Sign up</Link>
                    </div>

                    <div>
                        <Link>Login</Link>
                    </div>
                </div>


            </div>
        </div>

    )


}

export default LandingPage;