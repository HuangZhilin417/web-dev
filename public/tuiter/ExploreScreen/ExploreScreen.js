import NavigationSidebar from "../NavigationSidebar/index.js";
// import TodoList from "../../labs/a5/todos/TodoList";
// import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

(function ($) {
    $('#wd-explore').append(`
    <div class="wd-display-flex">
        <div class="wd-20 p-3">
          ${NavigationSidebar()}
        </div>
        <div class="wd-60 p-3">
          ${ExploreComponent()}
        </div>
        <div class="wd-20 p-3 d-none d-lg-block">
           ${WhoToFollowList()}
        </div>
    </div>
    `);
})($);
