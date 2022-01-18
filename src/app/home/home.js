import './home.css';
import React from 'react';
import ProfilePicture from '../../images/cristy-profile.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, to: '' },
  { icon: FaLinkedin, to: '' },
];

const Home = () => {
  console.log(ProfilePicture);

  return (
    <div className="c-home">
      <div className="c-home__header">
        <div className="l-flex-hc">
          <img src={ProfilePicture} alt="" className="c-home__avatar" />
        </div>
        <div className="c-home__header-info">
          <h1>Cristy Gonzales</h1>
          <h3>Software Engineer</h3>
          <div className="l-flex-g1"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
