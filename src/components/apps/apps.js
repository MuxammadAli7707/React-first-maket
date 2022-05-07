import './apps.css';
import pllay from '../../imgs/pllay.png';
import store from '../../imgs/store.png';
import aps from '../../imgs/apps.png';
function Apps () {
  return (
    <div className="app-inner">
        <div className="container">
          <div className="app-card row between middle">
           <div className="app-info">
            <h3 className="apps-title">Get Our Apps, Now!</h3>
            <p className="app-text">Reach out our apps everywhere and everytime with Sinauw Mobile Application.</p>
            <div className="row middle">
              <a href="#">
                <img className="pllay" src={pllay} alt="pllay" width="164" height="72" />
              </a>
              <a href="#">
                <img src={store} alt="store" width="147" height="49" />
              </a>
            </div>
           </div>
           <div>
            <img className="apps-imgs" src={aps} alt="apps" width="472" height="392" />
           </div>
          </div>
        </div>
      </div>
  );
}

export default Apps;