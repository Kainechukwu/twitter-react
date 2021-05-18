import React from "react";
import TrendsHeader from "./trendsHeader"
import TrendsItem from "./trendsItems"
import TrendsFooter from "./trendsFooter"

export default function Trends() {
    return (
        <div className="width100 trends" >
            <div className="width100">
                <TrendsHeader />
                <TrendsItem location="Trending in Nigeria" trend="Lockdown" tweetAmount="206k" />
                <TrendsItem location="Trending in Nigeria" trend="Biafra" tweetAmount="6k" />
                <TrendsItem location="Trending in Nigeria" trend="Buhari" tweetAmount="16k" />
                <TrendsFooter />
            </div>
        </div>
    )
}