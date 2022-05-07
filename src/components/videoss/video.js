import './video.css';
import iMac from '../../imgs/imacOne.png';
import iMacTwo from '../../imgs/imacTwo.png';

function Video () {
  return (
    <div className="video-box">
      <div className="container">
        <div className="video-title">
          <h3 className="card-title">Live Online Webinar</h3>
          <p className="card-text">You can stream Webinar live on our apps. Stay update on our Webinar, it's Free!</p>
          <div className="frame row between middle">
            <img className="imac" src={iMac} alt="iMac" width="300" height="270" />
            <iframe className="iframe" width="600" height="387" src="https://www.youtube.com/embed/MTrXNj21Ufc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <img className="imc-s" src={iMacTwo} alt="imac" width="300" height="270" />
          </div>
          <div className="vio-link row middle">
            <a className="video-link" href="#">See more webinar videos</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video;