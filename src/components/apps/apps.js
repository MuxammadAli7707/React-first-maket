import './apps.css';
import pllay from '../../imgs/pllay.png';
import store from '../../imgs/store.png';
import aps from '../../imgs/apps.png';
function Apps () {
  return (
    <div class="app-inner">
        <div class="container">
          <div class="app-card row between middle">
           <div class="app-info">
            <h3 class="apps-title">Get Our Apps, Now!</h3>
            <p class="app-text">Reach out our apps everywhere and everytime with Sinauw Mobile Application.</p>
            <div class="row middle">
              <a href="#">
                <img class="pllay" src={pllay} alt="pllay" width="164" height="72" />
              </a>
              <a href="#">
                <img src={store} alt="store" width="147" height="49" />
              </a>
            </div>
           </div>
           <div>
            <img class="apps-imgs" src={aps} alt="apps" width="472" height="392" />
           </div>
          </div>
        </div>
      </div>
  );
}

export default Apps;