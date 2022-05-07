import './friends.css';
import listIcon from '../../imgs/list-icon.svg';
import mentor from '../../imgs/mentor-icon.svg';
import heart from '../../imgs/heart.svg';
function Friends () {
  return (
    <div class="main-box">
        <div class="container">
          <ul class="friends-list row middle between">
            <li class="friends-item row">
              <img class="friend-img" src={listIcon} alt="list-icon" width="48" height="48" />
              <div class="friends-main">
                <h3 class="friends-title">Get New Friends</h3>
                <p class="friends-text">You will meet new friends in some of classes that you take. Say hello to them and
                  make friends, it will be so much warm friendship!</p>
              </div>
            </li>
            <li class="friends-item row">
              <img class="friend-img" src={mentor} alt="mentor-icon" width="48" height="48" />
              <div class="friends-main">
                <h3 class="friends-title">Get New Friends</h3>
                <p class="friends-text">You will meet new friends in some of classes that you take. Say hello to them and
                  make friends, it will be so much warm friendship!</p>
              </div>
            </li>
            <li class="friends-item row">
              <img class="friend-img" src={heart} alt="heart" width="48" height="48" />
              <div class="friends-main">
                <h3 class="friends-title">Get New Friends</h3>
                <p class="friends-text">You will meet new friends in some of classes that you take. Say hello to them and
                  make friends, it will be so much warm friendship!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
  );
}
export default Friends;