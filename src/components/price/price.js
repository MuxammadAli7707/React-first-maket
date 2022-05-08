import './price.css';
import star from '../../imgs/star 1.png';
import key from '../../imgs/key 1.png';
import crown from '../../imgs/crown 1.png';

function Price () {
  return (
    <div className="price-box">
        <div className="container">
          <div className="price-entry">
            <h3 className="card-title">Course Pricing</h3>
            <p className="card-text">Choose pricing that suits to your need.</p>
          </div>

          <ul className="pric-card row between">
            <li className="pric-item">
              <div className="star-box row">
                <img className="star-line" src={star} alt="star" width="36" height="36" />
                <div>
                  <h4 className="star-title">Free</h4>
                  <div className='row middle'>
                    <span className='dollar'>0$</span>
                    <p className="star-text"> / month</p>
                  </div>
                </div>
              </div>
              <ul className="star-list">
                <li className="star-item">Free e-book for every class</li>
                <li className="star-item">Materials update every day</li>
                <li className="star-item">Materials update every day</li>
                <li className="star-item">Materials update every day</li>
              </ul>
              <button className="star-btn">Buy Express</button>
            </li>
            <li className="pric-item">
              <div className="star-box row">
                <img className="star-line" src={key} alt="star" width="50" height="50" />
                <div>
                  <h4 className="star-title">Express</h4>
                  <div className='row middle'>
                    <span className='dollar'>75$</span>
                    <p className="star-text"> / month</p>
                  </div>
                </div>
              </div>
              <ul className="star-list">
                <li className="star-item">Free e-book for every class</li>
                <li className="star-item">Materials update every day</li>
                <li className="star-item">Materials update every day</li>
                <li className="star-item">Materials update every day</li>
              </ul>
              <button className="star-btn">Buy Express</button>
            </li>
            <li className="pric-item premium">
              <p className="popular">Popular</p>
              <div className="star-box row">
                <img className="star-line" src={crown} alt="star" width="36" height="36" />
                <div>
                  <h4 className="star-title">Premium</h4>
                  <div className='row middle'>
                    <span className='dollar'>115$</span>
                    <p className="star-text"> / month</p>
                  </div>
                </div>
              </div>
              <ul className="star-list">
                <li className="star-item">Free e-book for every class</li>
                <li className="star-item">Materials update every day</li>
                <li className="star-item">Materials update every day</li>
                <li className="star-item">Materials update every day</li>
              </ul>
              <button className="star-btn hover">Buy Express</button>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Price;