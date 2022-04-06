import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions"
import React from "react";
import styles from "./styles"
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        updateTuit(dispatch, {
            ...tuit,
            likes: tuit.likes + 1
        })};
    const dislikeTuit = () => {
        updateTuit(dispatch, {
            ...tuit,
            dislike: tuit.dislike + 1
        })};
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
                {tuit.likes !== 0 && <i className="fas fa-heart me-1" style={{color: 'red'}}></i>}
                {!tuit.likes && <i className="far fa-heart me-1"></i>}
                {tuit.likes !== 0 && tuit.likes}
            </span>
            <span onClick={dislikeTuit}>
                {(tuit.dislike !== 0 && tuit.dislike) && <i className="fas fa-thumbs-down" style={{color: 'gray'}}></i>}
                {!tuit.dislike && <i className="far fa-thumbs-down me-1"></i>}
                {tuit.dislike !== 0 && tuit.dislike}
            </span>
            <i className="fa fa-share"/>
        </div>

);
}
export default TuitStats;