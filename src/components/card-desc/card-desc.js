import './card-desc.css';
import bg from '../../imgs/bg.png';
import joey from '../../imgs/joey.png';
import figma from '../../imgs/figma.png';
import lap from '../../imgs/lap.png';
import android from '../../imgs/android.png';
function CardDesc () {
  return (
    <div class="card-box">
        <div class="container">
          <div class="card-inner">
            <h3 class="card-title">What Do You Want to Learn?</h3>
            <p class="card-text">Choose the right class as you need. Then enjoy studying.</p>

            <ul class="learn-list row between">
              <li class="learn-item-s">
                <img class="learn-img" src={bg} alt="" width="250" height="160" />
                <p class="learn-item-text">Technology</p>
                <h3 class="learn-item-content">Digital Marketing Strategy</h3>
                <p class="learn-item-text2">This course aims to give you deeper understanding of core processes ...</p>
                <span class="learn-span"></span>
                <div class="learn row middle">
                  <img src={joey} alt="joey" width="40" height="40" />
                  <div class="person">
                    <h4 class="learn-text">Joey Piera</h4>
                    <p class="person-text">Mentor</p>
                  </div>
                </div>
                <div class="center">
                  <a class="learn-acces active" href="#">Access class</a>
                </div>
              </li>
              <li class="learn-item">
                <img class="learn-img" src={figma} alt="" width="250" height="160" />
                <p class="learn-item-text">Technology</p>
                <h3 class="learn-item-content">Digital Marketing Strategy</h3>
                <p class="learn-item-text2">This course aims to give you deeper understanding of core processes ...</p>
                <span class="learn-span"></span>
                <div class="learn row middle">
                  <img src={joey} alt="joey" width="40" height="40" />
                  <div class="person">
                    <h4 class="learn-text">Joey Piera</h4>
                    <p class="person-text">Mentor</p>
                  </div>
                </div>
                <div class="center">
                  <a class="learn-acces" href="#">Access class</a>
                </div>
              </li>
              <li class="learn-item">
                <img class="learn-img" src={lap} alt="" width="250" height="160" />
                <p class="learn-item-text">Technology</p>
                <h3 class="learn-item-content">Digital Marketing Strategy</h3>
                <p class="learn-item-text2">This course aims to give you deeper understanding of core processes ...</p>
                <span class="learn-span"></span>
                <div class="learn row middle">
                  <img src={joey} alt="joey" width="40" height="40" />
                  <div class="person">
                    <h4 class="learn-text">Joey Piera</h4>
                    <p class="person-text">Mentor</p>
                  </div>
                </div>
                <div class="center">
                  <a class="learn-acces" href="#">Access class</a>
                </div>
              </li>
              <li class="learn-item">
                <img class="learn-img" src={android} alt="" width="250" height="160" />
                <p class="learn-item-text">Technology</p>
                <h3 class="learn-item-content">Digital Marketing Strategy</h3>
                <p class="learn-item-text2">This course aims to give you deeper understanding of core processes ...</p>
                <span class="learn-span"></span>
                <div class="learn row middle">
                  <img src={joey} alt="joey" width="40" height="40" />
                  <div class="person">
                    <h4 class="learn-text">Joey Piera</h4>
                    <p class="person-text">Mentor</p>
                  </div>
                </div>
                <div class="center">
                  <a class="learn-acces" href="#">Access class</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="center">
            <button class="show-btn">Show All classes</button>
          </div>
        </div>
      </div>
  );
}

export default CardDesc;