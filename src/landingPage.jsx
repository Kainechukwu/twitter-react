import React, { useState } from "react"
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
// import SignUp from "./signupReact"
// import Button from '@material-ui/core/Button';
const year = new Date().getFullYear();

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


});

function LandingPage() {
    const classes = useStyles();
    const [signUpButtonHover, setSignUpButtonHover] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);

    function signUpButtonOver() {
        setSignUpButtonHover(true);
    }

    function signUpButtonOut() {
        setSignUpButtonHover(false);
    }

    function logInButtonOver() {
        setButtonHover(true);
    }

    function logInButtonOut() {
        setButtonHover(false);
    }

    return (
        <div className="minWidth300">
            <div className="displayFlex displayFlexColumn"
                style={{ backgroundColor: "white" }}
            >
                <div className="flex-left-page">
                    <div>
                        <TwitterIcon viewBox="0 0 24 24" style={{ fontSize: 300, color: "white" }} />

                    </div>
                </div>
                <div className="page padding16px relative marginAutoWidth70">

                    <TwitterIcon style={{ fontSize: 50, color: "#74cce6" }} />

                    <Typography variant="h2"

                        className={classes.typographyStyle1}
                    >Happening now</Typography>

                    <Typography
                        variant="h4"
                        className={classes.typographyStyle2}
                    >Join Twitter Today.</Typography>


                    <div className="flexColumn flexRow linkDiv">

                        <Link to={{ pathname: "/signupReact" }}
                            style={{ marginBottom: "25px", marginRight: "20px" }}
                            className="buttonWidth textDecoration"
                        >
                            <div style={{ backgroundColor: signUpButtonHover ? "turquoise" : "rgba(29,161,242,1.00)" }}
                                onMouseOver={signUpButtonOver}
                                onMouseOut={signUpButtonOut}
                                className="buttonDivs signUpButton">
                                <span className="whiteText homeButtonText">Sign up</span>
                            </div>
                        </Link>


                        <Link to={{ pathname: "/loginReact" }}
                            className="buttonWidth textDecoration">
                            <div style={{ backgroundColor: buttonHover ? "rgb(203 229 245)" : "white" }}
                                onMouseOver={logInButtonOver}
                                onMouseOut={logInButtonOut}
                                className="buttonDivs loginButton">
                                <span className="loginText homeButtonText"
                                >
                                    Login</span>
                            </div>
                        </Link>

                    </div>


                </div>


            </div>

            <div className="footer"
                style={{ backgroundColor: "white" }}
            >
                <p> © {year} Twitter, Inc.</p>
            </div>
        </div>




    )


}

export default LandingPage;

