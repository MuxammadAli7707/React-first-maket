import './price.css';
import star from '../../imgs/star 1.png';

function Price () {
  return (
    <div class="price-box">
        <div class="container">
          <div class="price-entry">
            <h3 class="card-title">Course Pricing</h3>
            <p class="card-text">Choose pricing that suits to your need.</p>
          </div>

          <ul class="pric-card row between">
            <li class="pric-item">
              <div class="star-box row">
                <img class="star-line" src={star} alt="star" width="36" height="36" />
                <div>
                  <h4 class="star-title">Free</h4>
                  <p class="star-text">month</p>
                </div>
              </div>
              <ul class="star-list">
                <li class="star-item">Free e-book for every class</li>
                <li class="star-item">Materials update every day</li>
                <li class="star-item">Materials update every day</li>
                <li class="star-item">Materials update every day</li>
              </ul>
              <button class="star-btn">Buy Express</button>
            </li>
            <li class="pric-item">
              <div class="star-box row">
                <img class="star-line" src={star} alt="star" width="36" height="36" />
                <div>
                  <h4 class="star-title">Free</h4>
                  <p class="star-text">month</p>
                </div>
              </div>
              <ul class="star-list">
                <li class="star-item">Free e-book for every class</li>
                <li class="star-item">Materials update every day</li>
                <li class="star-item">Materials update every day</li>
                <li class="star-item">Materials update every day</li>
              </ul>
              <button class="star-btn">Buy Express</button>
            </li>
            <li class="pric-item premium">
              <p class="popular">Popular</p>
              <div class="star-box row">
                <img class="star-line" src={star} alt="star" width="36" height="36" />
                <div>
                  <h4 class="star-title">Free</h4>
                  <p class="star-text">month</p>
                </div>
              </div>
              <ul class="star-list">
                <li class="star-item">Free e-book for every class</li>
                <li class="star-item">Materials update every day</li>
                <li class="star-item">Materials update every day</li>
                <li class="star-item">Materials update every day</li>
              </ul>
              <button class="star-btn hover">Buy Express</button>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Price;