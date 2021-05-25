import React, { useState, useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import SmButton from "./smButtons"


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
        const formData = new FormData();

        formData.append("File", selectedFile);

        fetch("https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>", {
            method: "POST",
            body: formData
        })
            .then((response) => response.json())
            .then((result) => {
                console.log("Success:", result);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const fileInput = useRef();

    function openUploadFolder() {
        fileInput.current.click();
    }

    console.log(selectedFile);

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

