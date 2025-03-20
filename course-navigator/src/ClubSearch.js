

import React, { useState } from 'react';
import falcon from './falcon.png';
import accountIcon from './accountIcon.png';
import './ClubSearch.css';

const clubs = [
  { id: 1, name: 'A Show in Crescenta Valley', image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Academy of Science and Medicine', image: './clubicons/academy-logo.png' },
  { id: 3, name: 'Aid Africa', image: './clubicons/aidafrica.png' },
  { id: 4, name: 'American Red Cross', image: './clubicons/redcross.png' },
  { id: 5, name: 'Best Buddies', image: 'https://via.placeholder.com/100' },
  { id: 6, name: 'Black Student Union', image: './clubicons/bsu.png' }, 
  { id: 7, name: 'Caltech SEAL', image: './clubicons/caltech.png' }, 
  { id: 8, name: 'Ceramics Club', image: './clubicons/ceramics.png' }, 
  { id: 9, name: 'Chess Club', image: './clubicons/chess.png' }, 
  { id: 10, name: 'College Connection Club', image: 'https://via.placeholder.com/100' }, 
  { id: 11, name: 'Cooking For A Cause', image: './clubicons/cooking.png' }, 
  { id: 12, name: 'CV French Club', image: './clubicons/french.png' }, 
  { id: 13, name: 'CV Democrats (CVHSDEMS)', image: 'https://via.placeholder.com/100' }, 
  { id: 14, name: 'Crescenta Valley Podcast', image: 'https://via.placeholder.com/100' }, 
  { id: 15, name: 'CSF', image: 'https://via.placeholder.com/100' }, 
  { id: 16, name: 'Cultural Food Club', image: 'https://via.placeholder.com/100' }, 
  { id: 17, name: 'CV Crumbl', image: './clubicons/crumbl.png' }, 
  { id: 18, name: 'CV Recycles', image: './clubicons/recycle.png' }, 
  { id: 19, name: 'CVHS Creative Writing Club', image: 'https://via.placeholder.com/100' }, 
  { id: 20, name: 'CVHS Fashion Club', image: './clubicons/fashionclub.png' },
  { id: 21, name: 'CVHS LEO\'s Club', image: 'https://via.placeholder.com/100' }, 
  { id: 22, name: 'CVHS South Asian Club', image: 'https://via.placeholder.com/100' }, 
  { id: 23, name: 'DECA', image: './clubicons/deca.png' }, 
  { id: 24, name: 'DLIA Club (Dual Langauge Immersion Assistance)', image: 'https://via.placeholder.com/100' }, 
  { id: 25, name: 'Doodle 4 Good', image: './clubicons/D4G.png' }, 
  { id: 26, name: 'Falcon ESports', image: 'https://via.placeholder.com/100' }, 
  { id: 27, name: 'Falkon Robotics', image: './clubicons/robotics.png' }, 
  { id: 28, name: 'Give2Friends', image: 'https://via.placeholder.com/100' }, 
  { id: 29, name: 'GSA (Gender Sexuality Alliance)', image: './clubicons/gsa.png' }, 
  { id: 30, name: 'Hackathon Club', image: './clubicons/hackathon.png' }, 
  { id: 31, name: 'HS Foreign Service Association (HSFSA)', image: './clubicons/FSA.png' }, 
  { id: 32, name: 'Key Club', image: './clubicons/Keyclub.png' }, 
  { id: 33, name: 'Korean Arts', image: 'https://via.placeholder.com/100' }, 
  { id: 34, name: 'Leora Trust Club', image: 'https://via.placeholder.com/100' }, 
  { id: 35, name: 'Liberty in North Korean at CVHS', image: 'https://via.placeholder.com/100' }, 
  { id: 36, name: 'Link Crew', image: 'https://via.placeholder.com/100' }, 
  { id: 37, name: 'Little Hands Make a Big Difference', image: 'https://via.placeholder.com/100' }, 
  { id: 38, name: 'Medical Ethics Debate Club', image: 'https://via.placeholder.com/100' }, 
  { id: 39, name: 'MEDLIFE', image: './clubicons/medlife.png' }, 
  { id: 40, name: 'MedTalk', image: './clubicons/medtalk.png' }, 
  { id: 41, name: 'Mission Aid', image: 'https://via.placeholder.com/100' }, 
  { id: 42, name: 'Mock Trial', image: './clubicons/mocktrial.png' }, 
  { id: 43, name: 'Model United Nations', image: './clubicons/mun.png' },
  { id: 44, name: 'NAMI On Campus', image: 'https://via.placeholder.com/100' }, 
  { id: 45, name: 'National Art Honor Society', image: './clubicons/nahs.png' }, 
  { id: 46, name: 'Notable', image: 'https://via.placeholder.com/100' }, 
  { id: 47, name: 'Origami For Good', image: 'https://via.placeholder.com/100' }, 
  { id: 48, name: 'Paws for Hope (PFH)', image: 'https://via.placeholder.com/100' }, 
  { id: 49, name: 'Pear Tree Foundation', image: 'https://via.placeholder.com/100' }, 
  { id: 50, name: 'Prom Plus', image: 'https://via.placeholder.com/100' }, 
  { id: 51, name: 'Sending Sunshine', image: 'https://via.placeholder.com/100' }, 
  { id: 52, name: 'Sightshare', image: 'https://via.placeholder.com/100' }, 
  { id: 53, name: 'Speech and Debate Team', image: './clubicons/speech.png' }, 
  { id: 54, name: 'Start from Scratch', image: './clubicons/startfromscratch.png' }, 
  { id: 55, name: 'Students Demand Action', image: './clubicons/studentsdemand.png' }, 
  { id: 56, name: 'Students Stand with Refugees', image: 'https://via.placeholder.com/100' }, 
  { id: 57, name: 'TASSEL', image: './clubicons/tassel.png' }, 
  { id: 58, name: 'The Architecture Club (TAC)', image: 'https://via.placeholder.com/100' }, 
  { id: 59, name: 'The Just Serve Club', image: 'https://via.placeholder.com/100' }, 
  { id: 60, name: 'The Pickleball Club', image: './clubicons/pickleball.png' }, 
  { id: 61, name: 'The Timeless Literacy Club', image: 'https://via.placeholder.com/100' }, 
  { id: 62, name: 'Thespian Society', image: 'https://via.placeholder.com/100' }, 
  { id: 63, name: 'Threads of Hope', image: 'https://via.placeholder.com/100' }, 
  { id: 64, name: 'Tri-M Honors Music Society', image: './clubicons/trim.png' }, 
  { id: 65, name: 'Unity in Movement', image: 'https://via.placeholder.com/100' }, 
  { id: 66, name: 'Vietnamese Culture Club', image: 'https://via.placeholder.com/100' }, 
  { id: 67, name: '3D Design Club', image: 'https://via.placeholder.com/100' }, 
  { id: 68, name: 'Album Club', image: 'https://via.placeholder.com/100' }, 
  { id: 69, name: 'Armenian Club', image: './clubicons/armenian.png' }, 
  { id: 70, name: 'Beyond the Blueprint', image: './clubicons/beyond.png' }, 
  { id: 71, name: 'Chemistry Club', image: 'https://via.placeholder.com/100' }, 
  { id: 72, name: 'Civil Discourse', image: 'https://via.placeholder.com/100' }, 
  { id: 73, name: 'CVHS Reform Committee', image: 'https://via.placeholder.com/100' }, 
  { id: 74, name: 'Crochet Sewing Club', image: 'https://via.placeholder.com/100' }, 
  { id: 75, name: 'CVHS Car Club', image: 'https://via.placeholder.com/100' }, 
  { id: 76, name: 'CVHS Filipino Club', image: './clubicons/filipino.png' }, 
  { id: 77, name: 'CVHS Omid for Girls', image: 'https://via.placeholder.com/100' }, 
  { id: 78, name: 'DermED', image: 'https://via.placeholder.com/100' }, 
  { id: 79, name: 'Documentary Club', image: 'https://via.placeholder.com/100' }, 
  { id: 80, name: 'ELD Mentors', image: 'https://via.placeholder.com/100' }, 
  { id: 81, name: 'Falcon Christian Fellowship', image: 'https://via.placeholder.com/100' }, 
  { id: 82, name: 'Falkon Dynamics', image: 'https://via.placeholder.com/100' }, 
  { id: 83, name: 'FEMpowerment', image: 'https://via.placeholder.com/100' }, 
  { id: 84, name: 'Film Club', image: './clubicons/filmclub.png' }, 
  { id: 85, name: 'Game Development Club', image: 'https://via.placeholder.com/100' }, 
  { id: 86, name: 'German Club', image: 'https://via.placeholder.com/100' }, 
  { id: 87, name: 'Intro to AI and Machine Learning Club', image: 'https://via.placeholder.com/100' }, 
  { id: 88, name: 'Korean Arts Club', image: 'https://via.placeholder.com/100' }, 
  { id: 89, name: 'Machine Learning Club', image: 'https://via.placeholder.com/100' }, 
  { id: 90, name: 'Mind and Melody Club', image: 'https://via.placeholder.com/100' }, 
  { id: 91, name: 'Music Production Club', image: 'https://via.placeholder.com/100' }, 
  { id: 92, name: 'National Honor Society of Sports Medicine', image: 'https://via.placeholder.com/100' }, 
  { id: 93, name: 'Ocean Awareness Club', image: 'https://via.placeholder.com/100' }, 
  { id: 94, name: 'Philosophy and Ethics Club', image: './clubicons/philosophy.png' }, 
  { id: 95, name: 'Psychology Club', image: 'https://via.placeholder.com/100' }, 
  { id: 96, name: 'Rice and Spice: The Asian Cultural Club', image: 'https://via.placeholder.com/100' }, 
  { id: 97, name: 'Rocket Fuel for Thought', image: 'https://via.placeholder.com/100' }, 
  { id: 98, name: 'Senior Strength', image: 'https://via.placeholder.com/100' }, 
  { id: 99, name: 'Sharpates', image: 'https://via.placeholder.com/100' }, 
  { id: 100, name: 'Sin Limite', image: 'https://via.placeholder.com/100' }, 
  { id: 101, name: 'Social Card Club', image: 'https://via.placeholder.com/100' }, 
  { id: 102, name: 'Social Entrepreneurship Club', image: 'https://via.placeholder.com/100' }, 
  { id: 103, name: 'Society of Women Engineers', image: './clubicons/swe.png' }, 
  { id: 104, name: 'Space Explorers Club', image: 'https://via.placeholder.com/100' }, 
  { id: 105, name: 'Special Olympics!', image: 'https://via.placeholder.com/100' }, 
  { id: 106, name: 'Spikeball Club', image: './clubicons/spikeball.png' }, 
  { id: 107, name: 'Tennis Club', image: 'https://via.placeholder.com/100' }, 
  { id: 108, name: 'To: You', image: 'https://via.placeholder.com/100' }, 
  { id: 109, name: 'Together Through Time', image: 'https://via.placeholder.com/100' }, 
  { id: 110, name: 'United Fellowship Christian Club', image: 'https://via.placeholder.com/100' }, 
  { id: 111, name: 'Voice of Calling', image: 'https://via.placeholder.com/100' }, 
  { id: 112, name: 'we got your back', image: 'https://via.placeholder.com/100' },
  { id: 113, name: 'Journalism', image: './clubicons/journalism.png' }, 
   ];

function ClubSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClubs = clubs.filter(club =>
    club.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ClubSearch">
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
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search clubs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="search-results">
          {filteredClubs.map(club => (
            <div key={club.id} className="search-result-item">
              <img src={club.image} className="club-image" />
              <p className="club-name">{club.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClubSearch;
