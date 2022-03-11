const PostSummaryItem = ({post = {"topic": "web Development", "userName": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
}}) => {
    return (`<li class="list-group-item">
                <div class="wd-display-flex">
                    <div class="wd-main wd-padding-right">
                     ${post.topic ?
                        (`<text className="wd-topic">
                            ${post.topic}
                        </text>
                        </br>`)
                        : (``)}
                        
                        
                        <text class="wd-text-color">${post.userName} <i class="fas fa-check-circle"></i></text>
                        <text class="wd-topic">-${post.time} </text>
                        </br>
                        ${post.title ?
                        (`<text class="wd-text-color">${post.title}</text>
                                        </br>`)
                        : (``)}
                        
                 
                        ${post.tweets ?
                        (`<text class="wd-topic">${post.tweets} Tweets</text>`)
                        : (``)}
                    </div>
                    <img class="wd-picture" src=${post.image} />
                </div>
            </li>`)
}
export default PostSummaryItem;