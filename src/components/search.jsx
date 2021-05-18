import React from "react";
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

export default function Search() {
    return (
        <div style={{    marginBottom: "12px"}} className="width100">
            <div className="width100 displayFlex" style={{marginTop: "5px"}}>
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