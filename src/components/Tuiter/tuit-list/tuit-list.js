import React, {useEffect} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import {
    deleteTuit,
    findAllTuits
} from "../actions/tuits-actions";
import TuitListItem
    from "./tuit-list-item";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() =>
            findAllTuits(dispatch),
        []);


    return (
        <ul className="list-group">
            {
                tuits.map && tuits.map(tuit => {return (
                    <li className="list-group-item">
                        <div style={{'flexDirection': 'row', 'display': 'flex'}}>
                                                    <TuitListItem key={tuit._id} tuit={tuit}/>
                                                    <i className="fas fa-times float-end"
                                                       onClick={() => deleteTuit(dispatch, tuit)}/>
                        </div>
                        </li>)})
            }
        </ul>
    );
}

export default TuitList;