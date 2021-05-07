import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import API from "./axiosAPIs"
import Navbar from "./components/navbar";
import CenterPage from "./components/centerPage"


const useStyles = makeStyles({
    userPage: {
        height: "615px",
        flexDirection: "row",
        display: "flex"

    }

});






export default function UserPage() {

    const classes = useStyles();

    const [data, setData] = useState([]);

    useEffect(() => {
        API.get("/userHomePage?page=1&limit=10", (response) => {
            console.log(response.data);

            setData(response.data)
        }, (err) => {
            console.log(err);
        })
    }, []);


    return (
        <div className={classes.userPage}>

            <Navbar />
            <div style={{width: "79%"}}>

                
                <CenterPage tweets={data}/>
            </div>

        </div>

    )
}