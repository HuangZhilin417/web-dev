import React, {useState} from "react";
const NavigationSidebar = ({active = 'explore'}) => {
    const ewq = [28,107,26,65,95]
    return(<>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className={`list-group-item ${active === 'home' ? 'active' : ''}`} href="/">
                    <i className="fas fa-home"></i>

                        Home

                </a>
                <a className="list-group-item" href="/">
                    <i className="fas fa-hashtag"></i>

                        Explore

                </a>
                <a className="list-group-item" href="/">
                    <i className="fas fa-bell"></i>

                        Notifications

                </a>
                <a className="list-group-item" href="/">
                    <i className="fas fa-envelope"></i>

                        Messages

                </a>
                <a className="list-group-item" href="/">
                    <i className="fas fa-bookmark"></i>

                        Bookmarks

                </a>
                <a className="list-group-item" href="/">
                    <i className="fas fa-list"></i>

                        Lists

                </a>
                <a className="list-group-item" href="/">
                    <i className="fas fa-user"></i>

                        Profile

                </a>
                <a className="list-group-item" href="/">
                    <i className="fas fa-ellipsis-h"></i>

                        More

                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            <ul>
                {
                    ewq.map(dsa => dsa > 50).filter(rew =>
                        <li>{rew}</li>
                    )
                }
            </ul>
        </>
    );
}
export default NavigationSidebar;
