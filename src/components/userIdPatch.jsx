import React, { useState } from "react";
// import Avatar from "./avatar"
import Popper from '@material-ui/core/Popper';
// import { usePopper } from 'react-popper';
// import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import AccountButton from "./userAccountButton"

const MyPopper = ({ isOpen, clickAwayHandler }) => (
    <ClickAwayListener onClickAway={clickAwayHandler}>
        <Popper open={isOpen}>
            <Paper className="popper">There goes my custom popper</Paper>
        </Popper>
    </ClickAwayListener>
)


export default function UserIdPatch(props) {
    const [isOpen, setIsOpen] = useState(false),
        clickAwayHandler = () => setIsOpen(false),
        clickHandler = () => setIsOpen(true)


    return (

        <div>


            {
                isOpen && <MyPopper {...{ clickAwayHandler, isOpen }} />
            }

            <AccountButton
                // buttonRef={setReferenceElement}
                onClick={clickHandler}

            />

        </div>
    )
}

































// const [anchorEl, setAnchorEl] = useState();
// const [open, setOpen] = useState(false);
// const [on, setOn] = useState(false);

// // const [placement, setPlacement] = useState();



// function handleClick() {
//     // setAnchorEl(event.currentTarget);
//     setOpen((prev) => !prev);
//     console.log(open)

// }


// const handleClickAway = () => {

//    setOn(false);

// };

// let [referenceElement, setReferenceElement] = useState();
// let [popperElement, setPopperElement] = useState();

// let { styles, attributes } = usePopper(referenceElement, popperElement, { placement: "top" });



{/* <ClickAwayListener onClickAway={handleClickAway}>

<div ref={setPopperElement}
    style={styles.popper}
    {...attributes.popper}

    className={open ? "block" : "none"}
>
    <div
    // style={{display: open ? "block": "none" }}
    >
        <span>MenuItem</span>
    </div>
</div>
</ClickAwayListener> */}