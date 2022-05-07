import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import Header from './components/header/header';
import Hero from './components/hero/Hero';
import Friends from './components/Friends/friends';
import CardDesc from './components/card-desc/card-desc';
import Video from './components/videoss/video';
import Price from './components/price/price';
import Apps from './components/apps/apps';
import Footer from './components/footer/footer';

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(<Header/>);

const hero = ReactDOM.createRoot(document.getElementById("hero"));
hero.render(<Hero/>);

const friends = ReactDOM.createRoot(document.getElementById("friends"));
friends.render(<Friends />);

const cardDesc = ReactDOM.createRoot(document.getElementById("card-desc"));
cardDesc.render(<CardDesc />);

const video = ReactDOM.createRoot(document.getElementById("video"));
video.render(<Video />);

const price = ReactDOM.createRoot(document.getElementById("price"));
price.render(<Price />);

const apps = ReactDOM.createRoot(document.getElementById("apps"));
apps.render(<Apps />);

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(<Footer />);