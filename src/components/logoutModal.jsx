import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SmButton from "./smButtons"


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function LogoutModal(props) {
    const classes = useStyles();

    function handleLogout(){

        // const data = {
        //     _id: props.tweet_id
        // }

        // API.delete("/deleteTweet", data, (response) => {
        //     if (response.status === 200) {
        //         // setPush(true)
        //         // props.history.push("/userpageReact", push);
        //         window.location.reload(false);
        //         console.log("props", props);
        //         console.log("has been deleted");
        //     }
        // }, (err) => {
        //     console.log(err);
        // });

        console.log("logout")

    }


    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div
                        //   className={classes.paper}
                        className="modalPaper popups"
                        style={{color: "white", fontFamily: "sans-serif", fontWeight: "600"}}
                    >

                        <div style={{ textAlign: "center" }}>
                            <h3>Are you sure you want to logout?</h3>
                            {/* <span className="smallIconsColor"></span> */}
                        </div>

                        <div className="displayFlex" style={{ justifyContent: "space-evenly", margin: "10px 0 5px" }}>

                            <SmButton action={props.handleClose} name="cancel" width="76px" background="rgb(37, 51, 65)" />

                            <SmButton action={handleLogout} name="logout" width="76px" background="#f21170" />




                        </div>

                        {/* <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p> */}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}