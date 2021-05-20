import React from "react"
import MenuItem from "./menuItem"
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';


export default function Menu(props) {
    return (
        <div className="centerMoreMenu cursorPointer"
            style={{ position: "absolute", display: props.toggleOn ? "block" : "none" }}
            ref={props.domNode}

        >
            {/* <div style={{ color: "#f21170" }}>
                <div className="displayFlex" style={{ padding: "10px" }}>
                    <DeleteOutlineOutlinedIcon />
                    <div style={{ width: "90%" }}>
                        <span
                            style={{ position: "relative", top: "2px" }}
                        >delete</span>
                    </div>

                </div>
            </div> */}

            <MenuItem icon = {<DeleteOutlineOutlinedIcon />} spanName="delete"/>

        </div>
    )
}