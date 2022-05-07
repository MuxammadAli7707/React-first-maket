import './footer.css';
import Logo from '../../imgs/sinauw.svg';
function Footer () {
  return (
    <div className="container">
      <div className="site-footer row between">
        <div className="footer-entry">
          <a href="#">
            <img className="logo" src={Logo} alt="sinauw" width="82" height="39" />
          </a>
          <p className="footer-text">Any feedback or questions?Contact us on our social media</p>
          <ul className="footer-link-list row middle">
            <li className="footer-link-item">
              <a className="footer-link" href="#"><i className='bx bxl-facebook'></i></a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="#"><i className='bx bxl-twitter' ></i></a>
            </li>
            <li className="footer-link-item">
              <a className="footer-link" href="#"><i className='bx bxl-instagram' ></i></a>
            </li>
          </ul>
        </div>
        
        <ul className="footer-menu">
          <h4 className="menu-title">Menu</h4>
          <li className="footer-item">
            <a className="menu-link" href="#">Home</a>
          </li>
          <li className="footer-item">
            <a className="menu-link" href="#">Courses</a>
          </li>
          <li className="footer-item">
            <a className="menu-link" href="#">Webinar</a>
          </li>
        </ul>
        <ul className="footer-menu">
          <h4 className="menu-title">Services</h4>
          <li className="footer-item">
            <a className="menu-link" href="#">Materials Update</a>
          </li>
          <li className="footer-item">
            <a className="menu-link" href="#">Trusted Mentor</a>
          </li>
          <li className="footer-item">
            <a className="menu-link" href="#">Free E-book</a>
          </li>
          <li className="footer-item">
            <a className="menu-link" href="#">Meeting</a>
          </li>
        </ul>
        <ul className="footer-menu">
          <h4 className="menu-title">Further Information</h4>
          <li className="footer-item">
            <a className="menu-link" href="#">Terms & Conditions</a>
          </li>
          <li className="footer-item">
            <a className="menu-link" href="#">Privacy Policy</a>
          </li>
        </ul>
        <ul className="footer-menu">
          <h4 className="menu-title">Apps Download</h4>
          <li className="footer-item">
            <a className="menu-link" href="#">Google Play Store</a>
          </li>
          <li className="footer-item">
            <a className="menu-link" href="#">App Store</a>
          </li>
        </ul>
      </div>
      <p className="copy">Copyright
        2021 Sinauw. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;