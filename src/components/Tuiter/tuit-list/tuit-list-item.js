import styles from "./styles";
import React from "react";
import TuitStats from "./tuit-stats";

const TuitListItem = ({tuit}) => {


    return (<div style={{'width': '-moz-available'}}>
        <div style={styles.wdDisplayFlex}>
            <div style={styles.wd10}>
                <img style={styles.wdAvatar} src={tuit.avatarImage} alt=""/>
            </div>
            <div style={styles.wd90}>
                {tuit.username}
                <text style={styles.wdHandleColor}>@{tuit.handle}</text>
                <br/>
                <div className="wd-topic">{tuit.tuit}</div>
                <br/>
            </div>
        </div>
        <div>
            <TuitStats tuit={tuit}/>
        </div>
    </div>)
}


export default TuitListItem;