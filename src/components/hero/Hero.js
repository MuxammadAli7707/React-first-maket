import './Hero.css';
import heroImg from '../../imgs/sinaw.png';
import heroLamp from '../../imgs/lamp.svg';
import heroWhistle from '../../imgs/whistle.svg';
import heroElli from '../../imgs/elli.png';
import heroEllp from '../../imgs/ellp.png';
import heroBoy from '../../imgs/boy.png';
import heroBoyTwo from '../../imgs/boy2.png';
function Hero () {
  return (
    <div className="site-inner">
      <div className="container">
        <div className="row middle between">
          <div className="heroimg-box">
            <img className="hero-img" src={heroImg} alt="sinauw" width="650" height="600" />
            <div className="anime-img">
              <img className="lamp" src={heroLamp} alt="lamp" width="90" height="90" />
              <img className="whistle" src={heroWhistle} alt="whistle" width="90" height="90" />
            </div>
            <div className="student-box">
              <ul className="student-list row middle">
                <li className="student-item">
                  <img className="student-img" src={heroElli} alt="elli" width="52" height="52" />
                </li>
                <li className="student-item">
                  <img className="student-img-s" src={heroEllp} alt="ellp" width="52" height="52" />
                </li>
                <li className="student-item">
                  <img className="student-img-t" src={heroBoy} alt="boy" width="52" height="52" />
                </li>
                <li className="student-item">
                <img className="student-img-f" src={heroBoyTwo} alt="boy2" width="52" height="52" />
                </li>
                <button className="plus-btn">+</button>
                <p className="student-text">More than 80k+
                  Students <span className="join">joined!</span></p>
                </ul>
              </div>
            </div>
          <div className="site-info">
            <h2 className="hero-title">Grow Your Skills To Advance Your Career Path.</h2>
            <p className="hero-text">We have something big for you who want to level up!</p>
            <div className="input-box row middle between">
              <input className="input-text" type="text" id="text" placeholder="What do you want to learn..." />
              <i className='bx bx-search'></i>
            </div>
            <p className="link-text">Suggestions</p>
            <ul className="link-list row between">
              <li className="link-item">
                <a className="links" href="#">UI UX Design</a>
              </li>
              <li className="link-item">
                <a className="links" href="#">CSS Fundamental</a>
              </li>
              <li className="link-item">
                <a className="links" href="#">3D Design Illustration</a>
              </li>
              <li className="link-item">
                <a className="links" href="#">Website Development</a>
              </li>
              <li className="link-item">
                <a className="links" href="#">Logo Design</a>
              </li>
              <li className="link-item">
                <a className="links" href="#">Icon Design</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;  