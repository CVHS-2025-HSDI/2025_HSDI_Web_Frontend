/* global google */
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import './GoogleSignIn.css';

function GoogleSignIn() {
  const [user, setUser] = useState({});

  const handleCallbackResponse = (response) => {
    const userObject = jwtDecode(response.credential);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
  };

  const handleSignOut = () => {
    setUser({});
    document.getElementById('signInDiv').hidden = false; 
  };

  useEffect(() => {
    google.accounts.id.initialize({
        client_id: '1041348117685-305oslvvm7skhou6gff79jsr4lmv8c2a.apps.googleusercontent.com',
        callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large', 
    });
  }, []);

  return (
    <div className="google-signin-container">
      <div id="signInDiv" className="signin-button-container"></div> {/* Sign-in button container */}
      {Object.keys(user).length !== 0 && (
        <button onClick={handleSignOut}>Sign Out</button>
      )}

      {user && (
        <div>
          <img src={user.picture} alt="User Avatar" />
          <h3>{user.name}</h3>
        </div>
      )}
    </div>
  );
}

export default GoogleSignIn;
