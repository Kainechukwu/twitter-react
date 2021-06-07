import React, { useState, useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import SmButton from "./smButtons"
import API from "../axiosAPIs"



export default function UploadProfileImage() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [src, setSrc] = useState("");

    
    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        setSrc(event.target.files[0] && String(URL.createObjectURL(event.target.files[0])));
    };

    const handleSubmission = () => {
        const data = new FormData();

        data.append("file", selectedFile);

        console.log("imgData: ", data)

        API.post("/imageUpload", data, (response) => {
            if (response.status === 200) {
                // localStorage.setItem("user_id", response.headers.user_id);
                // console.log("user_id:" + localStorage.getItem("user_id"));
                // history.push("/userpageReact");
                console.log("response:" + response);

            }
        }, (err) => {
            console.log(err)
        });

 
    };

    const fileInput = useRef();

    function openUploadFolder() {
        fileInput.current.click();
    }

    // console.log(selectedFile);

    return (
        <div>
            <div className="displayFlex profileUpload">
                <div
                // style={{ marginTop: "30px", marginLeft: "160px" }}
                >
                    <input
                        style={{ marginTop: "30px", display: "none" }}
                        type="file"
                        name="file"
                        onChange={changeHandler}
                        ref={fileInput}
                        accept=".jpg"
                    />
                </div>

                {isFilePicked ? (
                    <div style={{ width: "60px", height: "60px" }}>
                        <Avatar
                            onClick={openUploadFolder}
                            src={src && src}
                            alt={selectedFile && selectedFile.name}
                            style={{ width: "100%", height: "100%" }}
                        //   className="width100 height100"
                        />
                    </div>
                ) : (
                    <div style={{ width: "60px", height: "60px" }}>
                        <Avatar
                            onClick={openUploadFolder}
                            style={{ width: "100%", height: "100%" }}
                        // className="width100 height100"
                        />

                    </div>
                )}

                <div style={{ color: "white", marginLeft: "35px"}}>
                   
                    <SmButton action={handleSubmission} name="upload" width="100px" background="rgb(29, 161, 242)" />
                </div>
            </div>
        </div>
    );
}

