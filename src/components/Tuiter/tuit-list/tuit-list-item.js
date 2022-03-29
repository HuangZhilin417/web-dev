import styles from "./styles";
import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };

    return (<li className="list-group-item">
        <div style={styles.wdDisplayFlex}>
            <div style={styles.wd10}>
                <img style={styles.wdAvatar} src={tuit.avatarImage} alt=""/>
            </div>
            <div style={styles.wd90}>
                {tuit.username}
                <text style={styles.wdHandleColor}>@{tuit.handle}</text>
                <i onClick={() =>
                    deleteTuit(tuit)}
                   className="fas fa-remove
                  fa-pull-right"/>
                <br/>
                <div className="wd-topic">{tuit.tuit}</div>
                <br/>
            </div>
        </div>
        <div>
            <TuitStats tuit={tuit}/>
        </div>
    </li>)
}


export default TuitListItem;