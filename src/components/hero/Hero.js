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
    <div class="site-inner">
      <div class="container">
        <div class="row middle between">
          <div class="heroimg-box">
            <img class="hero-img" src={heroImg} alt="sinauw" width="650" height="600" />
            <div class="anime-img">
              <img class="lamp" src={heroLamp} alt="lamp" width="90" height="90" />
              <img class="whistle" src={heroWhistle} alt="whistle" width="90" height="90" />
            </div>
            <div class="student-box">
              <ul class="student-list row middle">
                <li class="student-item">
                  <img class="student-img" src={heroElli} alt="elli" width="52" height="52" />
                </li>
                <li class="student-item">
                  <img class="student-img-s" src={heroEllp} alt="ellp" width="52" height="52" />
                </li>
                <li class="student-item">
                  <img class="student-img-t" src={heroBoy} alt="boy" width="52" height="52" />
                </li>
                <li class="student-item">
                <img class="student-img-f" src={heroBoyTwo} alt="boy2" width="52" height="52" />
                </li>
                <button class="plus-btn">+</button>
                <p class="student-text">More than 80k+
                  Students <span class="join">joined!</span></p>
                </ul>
              </div>
            </div>
          <div class="site-info">
            <h2 class="hero-title">Grow Your Skills To Advance Your Career Path.</h2>
            <p class="hero-text">We have something big for you who want to level up!</p>
            <div class="input-box row middle between">
              <input class="input-text" type="text" id="text" placeholder="What do you want to learn..." />
              <i class='bx bx-search'></i>
            </div>
            <p class="link-text">Suggestions</p>
            <ul class="link-list row between">
              <li class="link-item">
                <a class="links" href="#">UI UX Design</a>
              </li>
              <li class="link-item">
                <a class="links" href="#">CSS Fundamental</a>
              </li>
              <li class="link-item">
                <a class="links" href="#">3D Design Illustration</a>
              </li>
              <li class="link-item">
                <a class="links" href="#">Website Development</a>
              </li>
              <li class="link-item">
                <a class="links" href="#">Logo Design</a>
              </li>
              <li class="link-item">
                <a class="links" href="#">Icon Design</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;  