import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";
import ExploreComponent from "./ExploreComponent";
import styles from "./styles"

// <div className="wd-display-flex">

// </div>

const Tuiter = () => {
    return(
        <div style={styles.wdDisplayFlex}>
            <div style={styles.wd20} className="p-3">
                <NavigationSidebar active="home"/>
            </div>
            <div style={styles.wd60} className="p-3">
                <ExploreComponent/>
            </div>
            <div style={styles.wd20} className="p-3 d-none d-lg-block">
                <WhoToFollowList/>
            </div>
        </div>
    )
};
export default Tuiter;