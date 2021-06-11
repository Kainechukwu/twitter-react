import React from "react";
import Search from "./search";
import Trends from "./trends";
import WhoToFollow from "./whoToFollow";
import RightSideFooter from "./rightSideFooter";

export default function RightSide(){
    return (
        <div className="rightSide flexColumn fontSize15px rightSideHide">
            <Search />
            <Trends />
            <WhoToFollow />
            <RightSideFooter />




        </div>
    )
}