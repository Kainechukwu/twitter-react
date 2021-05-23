import React, {useState} from "react"
import MenuItem from "./menuItem"
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import PersonAddDisabledOutlinedIcon from '@material-ui/icons/PersonAddDisabledOutlined';
import API from "../axiosAPIs"
import {  withRouter } from "react-router-dom";
import DeleteYN from "./delete"


function Menu(props) {
    const user_id = localStorage.getItem("user_id");
    const [push, setPush] = useState(false);

    const [toggle, setToggle] = useState(false);

    // function handleToggle() {
    //     setToggle(function (prevValue) {
    //         return !prevValue
    //     })
    // }

 

    function handleDelete(){

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

    function toggleOn (){
        setToggle(true)
    }



    return user_id == props.user_id ? (
        <div className="centerMoreMenu cursorPointer"
            style={{ position: "absolute", display: props.toggleOn ? "block" : "none" }}
            ref={props.domNode}
        >
             <DeleteYN  toggle={toggle} setToggleOff = {() => setToggle(false) } menuOn={props.menuOn}/>

            <MenuItem action={toggleOn} icon = {<DeleteOutlineOutlinedIcon />} spanName="delete" color="#f21170"/>

        </div>
    ) : (
        <div className="centerMoreMenu cursorPointer"
            style={{ position: "absolute", display: props.toggleOn ? "block" : "none" }}
            ref={props.domNode}
        >
         
            <MenuItem icon = {<PersonAddDisabledOutlinedIcon />} spanName="unfollow" color="white"/>

        </div>
    )
}

export default withRouter(Menu);