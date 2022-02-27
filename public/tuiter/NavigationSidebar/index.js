const NavigationSidebar = () => {
    return(`
            <div class="list-group ">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-home"></i>
                    <Text>
                        Home
                    </Text>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-hashtag"></i>
                    <Text>
                        Explore
                    </Text>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bell"></i>
                    <Text>
                        Notifications
                    </Text>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-envelope"></i>
                    <Text>
                        Messages
                    </Text>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-bookmark"></i>
                    <Text>
                        Bookmarks
                    </Text>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-list"></i>
                    <Text>
                        Lists
                    </Text>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-user"></i>
                    <Text>
                        Profile
                    </Text>
                </a>
                <a class="list-group-item" href="/">
                    <i class="fas fa-ellipsis-h"></i>
                    <Text>
                        More
                    </Text>
                </a>
            <!-- continue the rest of the list -->
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
