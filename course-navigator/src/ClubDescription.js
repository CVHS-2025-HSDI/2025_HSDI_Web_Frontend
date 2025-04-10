// import logo from './logo.svg';
import emailIcon from './emailIcon.png';
import instaIcon from './instaIcon.png';
import remindIcon from './remindIcon.svg';
import locationIcon from './locationIcon.png';
import clubImage1 from './image.png';
import clubImage2 from './image.png';
import falconLogo from './falcon.png';
import accountIcon from './accountIcon.png';

import './ClubDescription.css';
import React from 'react';

var clubName = "Club Name";
var presName = "Pres Name";
var vpName = "Vp Name";
var desc = "all the description text m felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate ee. Curabi";
var email = "email@gmail.com";
var insta = "@insta";
var remind = "remind";
var location = "Room 0000";

function ClubDescription() {
  return (
    <div className="ClubDescription">
      <div className="header">
        <img src={falconLogo} className="falcon" alt="falcon" />
        <h1>Crescenta Valley High School</h1>
        <img src={accountIcon} className="accountIcon" alt="accountIcon" />
        <button className = "Signinbutton">Sign In</button>

        {/* <a href="#home">
          <img src={falconLogo} className="falcon" alt="falcon" />
          </a>
        <a href="#login">
          <button className="account-buttons">Log In</button>
        </a>
        <a href="#signup">
          <button className="account-buttons">Sign Up</button>
          </a>
        <a href="#account">
          <img src={accountIcon} className="accountIcon" alt="accountIcon" />
          </a> */}
      </div>

      <div className="flex ClubDescription-body">
        <div className="col pics">
          <img src={clubImage1} className="club-pic" alt="club-pic" />
          <img src={clubImage2} className="club-pic" alt="club-pic" />
        </div>

        <div className="col description">
          <h2>{clubName}</h2>
          <div className="descbox">
            <p>{desc}</p>
          </div>
        </div>

        <div className="col contacts">
          <div className="flex">
            <img src={accountIcon} className="officer-pic" alt="officer-pic" />
            <p className="align-left">{presName} (President)</p>
          </div>
          <div className="flex">
            <img src={accountIcon} className="officer-pic" alt="officer-pic" />
            <p className="align-left">{vpName} (Vice President)</p>
          </div>

          <h5 className="horizontally-centered">Contact Us!</h5>

          <div className="flex contact">
            <img src={emailIcon} className="contacts-pic" alt="contacts-pic" />
            <p className="align-left">{email}</p>
          </div>
          <div className="flex contact">
            <img src={instaIcon} className="contacts-pic" alt="contacts-pic" />
          <p className="align-left">{insta}</p>
          </div>
          <div className="flex contact">
            <img src={remindIcon} className="contacts-pic" alt="contacts-pic" />
            <p className="align-left">{remind} Join our Remind</p>
          </div>
          <div className="flex contact">
            <img src={locationIcon} className="contacts-pic" alt="contacts-pic" />
            <p className="align-left">{location}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ClubDescription;
