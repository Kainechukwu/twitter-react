import React, { useState } from "react";
// import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
// import API from "./axiosAPIs";
import Navbar from "./components/navbar";
import CenterPage from "./components/centerPage";
import CenterHeader from "./components/centerHeader"
import MobileNavbar from "./components/mobileNavbar"
import RightSide from "./components/rightSide";
import Messages from "./components/messages";
import Feeds from "./components/feeds";
import MobileTweetButton from "./components/mobileTweetButton"

const useStyles = makeStyles({
    userPage: {
        height: "685px",
        flexDirection: "row",
        display: "flex",
        backgroundColor: "#15202B",
        maxWidth: "1330px",
        margin: "auto"


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
                className="displayFlex mainPageDiv bg-dark"
            // style={{ width: "73%", marginLeft: "24%", justifyContent: "space-between" }}
            >

                <div className="center"
                //  style={{ width: "60%" }}
                >
                    <div className="borderRight borderLeft">

                        <CenterHeader />
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

            <MobileTweetButton />

            <MobileNavbar />

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
