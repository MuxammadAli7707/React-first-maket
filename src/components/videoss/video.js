import './video.css';
import iMac from '../../imgs/imacOne.png';
import iMacTwo from '../../imgs/imacTwo.png';

function Video () {
  return (
    <div class="video-box">
      <div class="container">
        <div class="video-title">
          <h3 class="card-title">Live Online Webinar</h3>
          <p class="card-text">You can stream Webinar live on our apps. Stay update on our Webinar, it's Free!</p>
          <div class="frame row between middle">
            <img class="imac" src={iMac} alt="iMac" width="300" height="270" />
            <iframe class="iframe" width="600" height="387" src="https://www.youtube.com/embed/MTrXNj21Ufc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <img class="imc-s" src={iMacTwo} alt="imac" width="300" height="270" />
          </div>
          <div class="vio-link row middle">
            <a class="video-link" href="#">See more webinar videos</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video;