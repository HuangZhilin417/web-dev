import {useDispatch} from "react-redux";
import React from "react";
import styles from "./styles"
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div style={styles.wdDisplayEven}>
            <span>
                <i className="far fa-comment"></i>
                {tuit.stats && tuit.stats.comments}
            </span>
            <span>
                  <i className="fa fa-retweet"/>
                {tuit.stats && tuit.stats.retuits}
            </span>
            <span onClick={likeTuit}>


                {tuit.liked && <i className="fas fa-heart me-1" style={{color: 'red'}}></i>}
                {!tuit.liked && <i className="far fa-heart me-1"></i>}
                {tuit.stats && tuit.stats.likes}
            </span>
            <i className="fa fa-share"/>
        </div>

);
}
export default TuitStats;