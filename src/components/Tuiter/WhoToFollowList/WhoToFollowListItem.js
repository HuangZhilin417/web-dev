import React from "react";
import styles from "./styles"
const WhoToFollowListItem = ({who}) =>{
        return(
        <li className={"list-group-item"} style={styles.wdDisplayFlex}>
            <div style={styles.wd10}>
                <img  style={styles.wdAvatar} src={who.avatarIcon} alt="image"/>
            </div>
            <div style={styles.wd70}>
                    {who.userName}
                    <i className="fas fa-check-circle"/>
                    <br/>
                    <div className="wd-topic">{who.handle}</div>
            </div>
            <div style={{...styles.wd20, ...styles.wdDisplayFlex, ...styles.wdJustifyContent}}>
                <button className="btn btn-primary rounded-pill">follow</button>
            </div>
        </li>)
};

export default WhoToFollowListItem;
