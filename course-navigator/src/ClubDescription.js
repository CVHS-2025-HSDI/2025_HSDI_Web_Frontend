// import logo from './logo.svg';
import emailIcon from './emailIcon.png';
import instaIcon from './instaIcon.png';
import remindIcon from './remindIcon.png';
import locationIcon from './locationIcon.png';
import image from './image.png';
import falcon from './falcon.png';
import accountIcon from './accountIcon.png';


import './ClubDescription.css';
import React from 'react';


function ClubDescription() {
  return (
    <div className="ClubDescription">
      <div className="nav">
        <a href="#home">
          <img src={falcon} className="falcon" alt="falcon" />
          </a>
        <a href="#login">
          <button className="account-buttons">Log In</button>
        </a>
        <a href="#signup">
          <button className="account-buttons">Sign Up</button>
          </a>
        <a href="#account">
          <img src={accountIcon} className="accountIcon" alt="accountIcon" />
          </a>
        </div>
        

      <div className="flex ClubDescription-body">
        <div className="col pics">
          <img src={image} className="club-pic" alt="club-pic" />
          <img src={image} className="club-pic" alt="club-pic" />
        </div>

        <div className="col description">
          <h2>Dance</h2>
          <div className="descbox">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor velit feugiat dolor finibus, a iaculis eros volutpat. Vivamus urna dolor, hendrerit non enim vel, rhoncus imperdiet elit. Etiam placerat magna at nunc sollicitudin, eget rhoncus ipsum scelerisque. Nunc convallis ante non ipsum porta volutpat. Mauris ultrices tellus in risus accumsan, nec tincidunt sapien placerat. </p>
          </div>
        </div>

        <div className="col contacts">
          <div className="flex">
            <img src={accountIcon} className="officer-pic" alt="officer-pic" />
            <p className="align-left">President's name (President)</p>
          </div>
          <div className="flex">
            <img src={accountIcon} className="officer-pic" alt="officer-pic" />
            <p className="align-left">VP's name (Vice President)</p>
          </div>

          <h5 className="horizontally-centered">Contact Us!</h5>

          <div className="flex contact">
            <img src={emailIcon} className="contacts-pic" alt="contacts-pic" />
            <p className="align-left">exampleemail@gmail.com</p>
          </div>
          <div className="flex contact">
            <img src={instaIcon} className="contacts-pic" alt="contacts-pic" />
          <p className="align-left">@whatever</p>
          </div>
          <div className="flex contact">
            <img src={remindIcon} className="contacts-pic" alt="contacts-pic" />
            <p className="align-left">Join our Remind</p>
          </div>
          <div className="flex contact">
            <img src={locationIcon} className="contacts-pic" alt="contacts-pic" />
            <p className="align-left">Room 0000</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ClubDescription;
