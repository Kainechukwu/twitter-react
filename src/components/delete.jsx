import React from "react";
import API from "../axiosAPIs";
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



export default function DeleteYN(props) {

    const classes = useStyles();
    // let domNode = useClickOutside(() => {
    //     {props.setToggleOff()}

    // })

    function handleDelete() {

        const data = {
            _id: props.tweet_id
        }

        API.delete("/deleteTweet", data, (response) => {
            if (response.status === 200) {
                // setPush(true)
                // props.history.push("/userpageReact", push);
                window.location.reload(false);
                console.log("props", props);
                console.log("has been deleted");
            }
        }, (err) => {
            console.log(err);
        });
        // console.log("delete")

    }

    function cancel(){
       {props.handleClose()};
    //    {props.setToggleOff()};
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
                        style={{ color: "white", fontFamily: "sans-serif", fontWeight: "600", maxWidth: "25%", paddingBottom: "30px" }}
                    >
                        <div style={{ textAlign: "center" }}>
                            <h3>Are you sure?</h3>
                            <span className="smallIconsColor">This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results. </span>
                        </div>

                        <div className="displayFlex" style={{ justifyContent: "space-evenly", margin: "10px 0 5px" }}>

                            <SmButton action={cancel} name="cancel" width="76px" background="rgb(37, 51, 65)" />

                            <SmButton action={handleDelete} name="delete" width="76px" background="#f21170" />




                        </div>
                    </div>

                </Fade>
            </Modal>
        </div>
    )
}






