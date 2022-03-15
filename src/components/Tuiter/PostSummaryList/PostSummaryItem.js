import React from "react";
import styles from "./styles"

const PostSummaryItem = ({post}) => {
    return (<li className="list-group-item">
                <div style={styles.wdDisplayFlex}>
                    <div style={{...styles.wdMain, ...styles.wdPaddingRight}}>
                     {post.topic ?
                        (<div>
                                <text style={styles.wdTopic}>
                                    {post.topic}
                                </text>
                        </div>)
                        : (``)}
                        
                        <div>
                            <text style={styles.wdTextColor}>{post.userName} <i className="fas fa-check-circle"/></text>
                            <text style={styles.wdTopic}>-{post.time} </text>
                        </div>


                        {post.title ?
                        (<div><text style={styles.wdTextColor}>{post.title}</text></div>
                        )
                        : ('')}
                        
                 
                        {post.tweets ?
                            (<div><text style={styles.wdTopic}>{post.tweets} Tweets</text></div>)
                        : ('')}
                    </div>
                    <img style={styles.wdPicture} src={post.image} />
                </div>
            </li>)
}
export default PostSummaryItem;