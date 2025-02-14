import logo from './logo.svg';
import './ClubOutline.css';

function ClubOutline() {
  return (
    <div className="ClubOutline">
      <header className="ClubOutline-header">
        {/* <img src={logo} className="ClubOutline-logo" alt="logo" /> */}
        <p>
          Edit <code>src/ClubOutline.js</code> and save to reload. HELLO
        </p>
        <a
          className="ClubOutline-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default ClubOutline;
