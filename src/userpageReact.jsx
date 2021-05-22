import React, { useState, useEffect } from "react";
// import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import API from "./axiosAPIs";
import Navbar from "./components/navbar";
import CenterPage from "./components/centerPage";
// import DisplayTweet from "./components/displayTweet";
// import useFetch from "react-fetch-hook";
import RightSide from "./components/rightSide";
import Messages from "./components/messages";
import Feeds from "./components/feeds"

const useStyles = makeStyles({
    userPage: {
        height: "615px",
        flexDirection: "row",
        display: "flex",
        backgroundColor: "#15202B"


    }

});



export default function UserPage(props) {

    const classes = useStyles();
   
    const [rendered, setRendered] = useState(0);

    console.log("rendered", rendered)



    return (
        <div className={classes.userPage}>

            <Navbar />
            <div
                className="displayFlex"
                style={{ width: "73%", marginLeft: "24%", justifyContent: "space-between" }}>

                <div style={{ width: "60%" }}>
                    <div className="borderRight">
                        <CenterPage
                            setRendered={() => setRendered((prev) => prev + 1)}
                             />
                        
                        {/* -------------------FEEDS------------------- */}
                        <Feeds 
                        // data={data}
                         rendered={rendered} 

                         />

                    </div>
                </div>

                <RightSide />



            </div>

            <Messages />

        </div>

    )



}












// export default function UserPage() {

//     const classes = useStyles();

//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {
//         API.get("/userHomePage?page=1&limit=10", (response) => {
//             console.log(response.data);

//             setIsLoading(false)
//             console.log("hello")
//             setData(response.data.resArray)
//         }, (err) => {
//             console.log(err);
//         })
//     }, []);

//     console.log(data);

//     if(isLoading === true) {
//         return (
//             <div className={classes.userPage}>

//             <Navbar />
//             <div style={{ width: "79%" }}>
//                 <div className="borderRight" style={{ width: "58%" }}>
//                     <div>
//                         <CenterPage />
//                          {/* {data.resArray.map((obj) => {


//                            return <DisplayTweet key={obj._id} user_id={obj.user_id} username={obj.firstName} handle={obj.lastName} tweet={obj.tweet}/> 
//                         })}  */}

//                         {/* <DisplayTweet /> */}
//                     </div>
//                 </div>


//             </div>

//         </div>
//         )
//     } else if (data.length === 0) {
//         return (
//             <div className={classes.userPage}>

//                 <Navbar />
//                 <div style={{ width: "79%" }}>
//                     <div className="borderRight" style={{ width: "58%" }}>
//                         <div>
//                             <CenterPage />
//                              {data.resArray.map((obj) => {


//                                return <DisplayTweet key={obj._id} user_id={obj.user_id} username={obj.firstName} handle={obj.lastName} tweet={obj.tweet}/> 
//                             })} 

//                             {/* <DisplayTweet /> */}
//                         </div>
//                     </div>


//                 </div>

//             </div>

//         )
//     }


// }
