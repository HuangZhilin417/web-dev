import React from 'react';
import PostSummaryList from "../PostSummaryList";
import styles from "./styles"
const ExploreComponent = () => {
    return(
        <div>
            <div className="row">
                <div style={{...styles.wdMinHeight, ...styles.wdSpaceEven}}>
                    <i className="fas fa-search position-absolute p-3" />
                    <input placeholder="Search Tuiter" style={styles.wdSearchInput} type="text"/>
                    <i className="fas fa-cog ps-3" style={{...styles.wdIconSize, ...styles.wdIconBlue}}/>

                </div>
                <div style={styles.wdPadding}>
                    <ul className="nav mb-2 nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="for-you.html">For you</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="trending.html">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="news.html">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="sports.html">Sports</a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a className="nav-link" href="entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                </div>

                <div style={styles.wdContainer}>
                    <img alt='rocket' style={styles.wdRocketImg} src='https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1' />
                    <div style={styles.wdBottomLeft}> SpaceX's Star Ship</div>
                </div>
            </div>

            <PostSummaryList/>
        </div>
    )
};
export default ExploreComponent;


