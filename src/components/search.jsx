import React from "react";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

export default function Search() {
    return (
        <div className= "width100 sticky" style={{paddingBottom: "6px",  marginBottom: "12px", backgroundColor: "#15202B"}} >
            <div className="width100 displayFlex" style={{marginTop: "5px", paddingBottom: "5px"}}>
                <div className="searchIconDiv">
                    <SearchRoundedIcon className="searchIcon smallIconsColor displayFlex" />
                </div>
                <div className="searchInputDiv">
                    <input className="searchInput fontSizeInherit" placeholder="Search" type="search" />
                </div>

            </div>


        </div>
    )
}