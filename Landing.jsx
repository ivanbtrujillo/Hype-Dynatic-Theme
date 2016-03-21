import React from 'react';
import Header from './Header.jsx';
import Blog from './Blog.jsx';
import Config from '../../../../../data/__config.json';

console.log(Config.profileImage);

export default class Landing extends React.Component {
  render() {
    return (
      <div className="full-height background-image">
        <section className="fullscreen centered-wrap transparency-03">
          <Header />
          <div className="centered text-xs-center main">
            <img className="img-circle m-r-1" style={{height: 128, width: 128}} src={Config.profileImage} alt="..." />
            <h1 className="main-text gradient-color">{Config.title}</h1>
            <p className="slogan-text">{Config.description}</p>
            <a  className="btn btn-primary" href={Config.social.twitter.link}>Twitter</a> &nbsp; <a className="btn btn-primary" href={Config.social.youtube.link}>Youtube</a>

          </div>
        </section>
        <Blog />
      </div>
    );
  }
}
