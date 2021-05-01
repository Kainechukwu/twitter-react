import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import API from "./axiosAPIs"
import Navbar from "./components/navbar";
import CenterPage from "./components/centerPage"


const useStyles = makeStyles({
    userPage: {
        backgroundColor: "#00334e",
        height: "615px",
        flexDirection: "row",
        display: "flex"

    }

});






export default function UserPage() {

    const classes = useStyles();

    // const [data, setData] = useState([]);

    useEffect(() => {
        API.get("/userHomePage?page=1&limit=3", (response) => {
            console.log(response)
        }, (err) => {
            console.log(err);
        })
    }, []);


    return (
        <div className={classes.userPage}>

            <Navbar />
            <CenterPage />

        </div>

    )
}