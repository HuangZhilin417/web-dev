import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";
const Tuiter = () => {
    return(
        <>
        <NavigationSidebar active="home"/>
        <WhoToFollowList/>
        </>
    )
};
export default Tuiter;
