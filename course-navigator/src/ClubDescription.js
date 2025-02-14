import logo from './logo.svg';
import emailIcon from './emailIcon.png';
import instaIcon from './instaIcon.png';
// import remindIcon from './remindIcon.png';
import locationIcon from './locationIcon.png';


import './ClubDescription.css';
import React from 'react';


function ClubDescription() {
  return (
    <div className="ClubDescription">
      <div className="nav">
        <a href="#home">
          <img src={logo} className="ClubDescription-logo" />
          </a>
        <a href="#account">
          <img src={logo} className="account-logo" />
          </a>
        <a href="#login">
          <button className="account-buttons">Log In</button>
        </a>
        <a href="#signup">
          <button className="account-buttons">Sign Up</button>
          </a>
        </div>

      <div className="ClubDescription-body">
        <div className="flex">
          <div className="col pics">
            <img src={instaIcon} className="club-pic" />
            <img src={instaIcon} className="club-pic" />
          </div>
          <div className="col description">
            <h2>Dance</h2>
            <p className="descbox">sssssssssssssssssssssss ssssssssssssssss sssssssss sssssssssssssssssssssssssssssss</p>
          </div>
          <div className="col contacts">
            <div className="flex">
              <img src={logo} className="officer-pic" />
              <p className="center">President's name (President)</p>

            </div>
            <div className="flex">
              <img src={logo} className="officer-pic" />
              <p className="center">VP's name (Vice President)</p>

            </div>

            <h5 className="horizontally-centered">Contact Us!</h5>

            <div className="flex contact">
              <img src={emailIcon} className="contacts-pic" />
              <p className="center">exampleemail@gmail.com</p>
            </div>
            <div className="flex contact">
              <img src={instaIcon} className="contacts-pic" />
              <p className="center">exampleemail@gmail.com</p>
            </div>
            <div className="flex contact">
              <img src={instaIcon} className="contacts-pic" />
              <p className="center">Join our Remind</p>
            </div>
            <div className="flex contact">
              <img src={locationIcon} className="contacts-pic" />
              <p className="center">Room xyz</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ClubDescription;
