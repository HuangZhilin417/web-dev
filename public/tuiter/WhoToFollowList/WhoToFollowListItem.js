
const WhoToFollowListItem = (who) =>{
return(`
<li class="list-group-item wd-display-flex">          
    <div class="wd-flex-10">
        <img class="wd-avatar" src=${who.avatarIcon} />
    </div>
    <div class="wd-70">
        ${who.userName}
        <i class="fas fa-check-circle"></i>
    </br>
    <Text class="wd-topic">${who.handle}</Text>
       </div>
    <div class="wd-20">
        <button class="btn btn-primary rounded-pill">follow</button>
    </div>
</li>`)

}

export default WhoToFollowListItem;
