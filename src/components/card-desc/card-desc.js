import './card-desc.css';
import bg from '../../imgs/bg.png';
import joey from '../../imgs/joey.png';
import figma from '../../imgs/figma.png';
import lap from '../../imgs/lap.png';
import android from '../../imgs/android.png';
function CardDesc () {
  return (
    <div className="card-box">
        <div className="container">
          <div className="card-inner">
            <h3 className="card-title">What Do You Want to Learn?</h3>
            <p className="card-text">Choose the right className as you need. Then enjoy studying.</p>

            <ul className="learn-list row between">
              <li className="learn-item-s">
                <img className="learn-img" src={bg} alt="" width="250" height="160" />
                <p className="learn-item-text">Technology</p>
                <h3 className="learn-item-content">Digital Marketing Strategy</h3>
                <p className="learn-item-text2">This course aims to give you deeper understanding of core processes ...</p>
                <span className="learn-span"></span>
                <div className="learn row middle">
                  <img src={joey} alt="joey" width="40" height="40" />
                  <div className="person">
                    <h4 className="learn-text">Joey Piera</h4>
                    <p className="person-text">Mentor</p>
                  </div>
                </div>
                <div className="center">
                  <a className="learn-acces active" href="#">Access class</a>
                </div>
              </li>
              <li className="learn-item">
                <img className="learn-img" src={figma} alt="" width="250" height="160" />
                <p className="learn-item-text">Technology</p>
                <h3 className="learn-item-content">Digital Marketing Strategy</h3>
                <p className="learn-item-text2">This course aims to give you deeper understanding of core processes ...</p>
                <span className="learn-span"></span>
                <div className="learn row middle">
                  <img src={joey} alt="joey" width="40" height="40" />
                  <div className="person">
                    <h4 className="learn-text">Joey Piera</h4>
                    <p className="person-text">Mentor</p>
                  </div>
                </div>
                <div className="center">
                  <a className="learn-acces" href="#">Access class</a>
                </div>
              </li>
              <li className="learn-item">
                <img className="learn-img" src={lap} alt="" width="250" height="160" />
                <p className="learn-item-text">Technology</p>
                <h3 className="learn-item-content">Digital Marketing Strategy</h3>
                <p className="learn-item-text2">This course aims to give you deeper understanding of core processes ...</p>
                <span className="learn-span"></span>
                <div className="learn row middle">
                  <img src={joey} alt="joey" width="40" height="40" />
                  <div className="person">
                    <h4 className="learn-text">Joey Piera</h4>
                    <p className="person-text">Mentor</p>
                  </div>
                </div>
                <div className="center">
                  <a className="learn-acces" href="#">Access class</a>
                </div>
              </li>
              <li className="learn-item">
                <img className="learn-img" src={android} alt="" width="250" height="160" />
                <p className="learn-item-text">Technology</p>
                <h3 className="learn-item-content">Digital Marketing Strategy</h3>
                <p className="learn-item-text2">This course aims to give you deeper understanding of core processes ...</p>
                <span className="learn-span"></span>
                <div className="learn row middle">
                  <img src={joey} alt="joey" width="40" height="40" />
                  <div className="person">
                    <h4 className="learn-text">Joey Piera</h4>
                    <p className="person-text">Mentor</p>
                  </div>
                </div>
                <div className="center">
                  <a className="learn-acces" href="#">Access class</a>
                </div>
              </li>
            </ul>
          </div>
          <div className="center">
            <button className="show-btn">Show All classes</button>
          </div>
        </div>
      </div>
  );
}

export default CardDesc;