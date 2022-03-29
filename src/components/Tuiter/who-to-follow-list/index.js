import WhoToFollowListItem
    from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
import React from "react";
const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return(
        <div>
            <ul className="list-group">
                <li className="list-group-item">Who to follow</li>
                {who.map(w => {
                    return (<WhoToFollowListItem who={w}/>);
                })}
            </ul>
        </div>
    );
};
export default WhoToFollowList;