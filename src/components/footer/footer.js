import './footer.css';
import Logo from '../../imgs/sinauw.svg';
function Footer () {
  return (
    <div class="container">
      <div class="site-footer row between">
        <div class="footer-entry">
          <a href="#">
            <img class="logo" src={Logo} alt="sinauw" width="82" height="39" />
          </a>
          <p class="footer-text">Any feedback or questions?Contact us on our social media</p>
          <ul class="footer-link-list row middle">
            <li class="footer-link-item">
              <a class="footer-link" href="#"><i class='bx bxl-facebook'></i></a>
            </li>
            <li class="footer-link-item">
              <a class="footer-link" href="#"><i class='bx bxl-twitter' ></i></a>
            </li>
            <li class="footer-link-item">
              <a class="footer-link" href="#"><i class='bx bxl-instagram' ></i></a>
            </li>
          </ul>
        </div>
        
        <ul class="footer-menu">
          <h4 class="menu-title">Menu</h4>
          <li class="footer-item">
            <a class="menu-link" href="#">Home</a>
          </li>
          <li class="footer-item">
            <a class="menu-link" href="#">Courses</a>
          </li>
          <li class="footer-item">
            <a class="menu-link" href="#">Webinar</a>
          </li>
        </ul>
        <ul class="footer-menu">
          <h4 class="menu-title">Services</h4>
          <li class="footer-item">
            <a class="menu-link" href="#">Materials Update</a>
          </li>
          <li class="footer-item">
            <a class="menu-link" href="#">Trusted Mentor</a>
          </li>
          <li class="footer-item">
            <a class="menu-link" href="#">Free E-book</a>
          </li>
          <li class="footer-item">
            <a class="menu-link" href="#">Meeting</a>
          </li>
        </ul>
        <ul class="footer-menu">
          <h4 class="menu-title">Further Information</h4>
          <li class="footer-item">
            <a class="menu-link" href="#">Terms & Conditions</a>
          </li>
          <li class="footer-item">
            <a class="menu-link" href="#">Privacy Policy</a>
          </li>
        </ul>
        <ul class="footer-menu">
          <h4 class="menu-title">Apps Download</h4>
          <li class="footer-item">
            <a class="menu-link" href="#">Google Play Store</a>
          </li>
          <li class="footer-item">
            <a class="menu-link" href="#">App Store</a>
          </li>
        </ul>
      </div>
      <p class="copy">Copyright
        2021 Sinauw. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;