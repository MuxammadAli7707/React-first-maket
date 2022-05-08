import './header.css';
import logo from '../../imgs/sinauw.svg';
import glob from '../../imgs/globe.png'
function Header () {
  return (
    <header className="site-header">
      <div className="site-inner">
        <div className="container">
          <div className="row middle">
            <div className="site-logo">
              <a href="#">
              <img className="logo" src={logo} alt="sinauw" width="82" height="39" />
              </a>
            </div>
            <div className="site-nav">
              <ul className="nav-list row middle between">
                <li className="nav-item">
                  <a className="nav-link activ" href="#">home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">courses</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">webinar</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">pricing</a>
                </li>
              </ul>
            </div>
            <div className="site-language row middle">
              <select className="eng" name="eng" id="Eng">
                <option className="select" value="Eng">Eng</option>
                <option className="select" value="Uzb">Uzb</option>
                <option className="select" value="Rus">Rus</option>
              </select>
              <img className='glob' src={glob} alt="glob" width="24" height="24" />
            </div>
            <a className="site-link" href="#">login</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;