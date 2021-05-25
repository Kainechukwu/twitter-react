import React, { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import AccountButton from './userAccountButton';
import MyModal from "./modal"
// import { makeStyles } from '@material-ui/core/styles';




export default function UserIdPatch(props) {
    const [open, setOpen] = useState(false);

    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const handleModal = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        handleOpenModal()
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const [openModal, setOpenModal] = useState(false);

    function  handleOpenModal () {
      setOpenModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenModal(false);
    };


    return (

        <div>
            <MyModal open={openModal} handleClose={handleCloseModal}/>

            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ 
                            transformOrigin: placement === 'center top',
                            
                            width: "200px", 
                            backgroundColor: "#15202B", 
                            color: "white", 
                            boxShadow: "rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px"
                            }}
                        // className="grow"
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleModal}>Edit profile</MenuItem>
                                    
                                    
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>

            <AccountButton
                anchorRef={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}

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