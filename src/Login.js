import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './navstyle.css'; 


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleLogin = () => {
    loginWithRedirect();
  };

  // Update the welcome message if the user is authenticated
  if (isAuthenticated) {
    setWelcomeMessage(`Welcome hiiiiiiiiiiiiiiiii, ${user.name}!`);
  }

  return (
    <div>
      <button
        className="btn btn-primary btn-block"
        onClick={handleLogin}
        id="LogIn"
      >
        Log In
      </button>
      {isAuthenticated && <div>{welcomeMessage}</div>}
    </div>
  );
};

export default LoginButton;
