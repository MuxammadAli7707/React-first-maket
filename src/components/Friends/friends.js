import './friends.css';
import listIcon from '../../imgs/list-icon.svg';
import mentor from '../../imgs/mentor-icon.svg';
import heart from '../../imgs/heart.svg';
function Friends () {
  return (
    <div className="main-box">
        <div className="container">
          <ul className="friends-list row middle between">
            <li className="friends-item row">
              <img className="friend-img" src={listIcon} alt="list-icon" width="48" height="48" />
              <div className="friends-main">
                <h3 className="friends-title">Get New Friends</h3>
                <p className="friends-text">You will meet new friends in some of classees that you take. Say hello to them and
                  make friends, it will be so much warm friendship!</p>
              </div>
            </li>
            <li className="friends-item row">
              <img className="friend-img" src={mentor} alt="mentor-icon" width="48" height="48" />
              <div className="friends-main">
                <h3 className="friends-title">Get New Friends</h3>
                <p className="friends-text">You will meet new friends in some of classees that you take. Say hello to them and
                  make friends, it will be so much warm friendship!</p>
              </div>
            </li>
            <li className="friends-item row">
              <img className="friend-img" src={heart} alt="heart" width="48" height="48" />
              <div className="friends-main">
                <h3 className="friends-title">Get New Friends</h3>
                <p className="friends-text">You will meet new friends in some of classes that you take. Say hello to them and
                  make friends, it will be so much warm friendship!</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
  );
}
export default Friends;