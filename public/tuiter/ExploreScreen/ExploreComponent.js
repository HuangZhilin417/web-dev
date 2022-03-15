import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="row" xmlns="http://www.w3.org/1999/html">
                     <div class="wd-min-height wd-space-even">
                    <i class="fas fa-search position-absolute p-3"></i>
                    <input placeholder="Search Tuiter" class="wd-search-input" type="text"/>
                    <i class="fas fa-cog wd-icon-blue wd-icon-size ps-3" ></i>
                  
                </div>      
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <div class="wd-container">
                <img class="wd-rocket-img" src='https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1' />
                <div class="wd-bottom-left"> SpaceX's Star Ship</div>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
