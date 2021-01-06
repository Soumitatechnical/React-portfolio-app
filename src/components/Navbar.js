import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {

    const {
        isAuthenticated,
        logout,
        user,
        loginWithRedirect,
        isLoading
      } = useAuth0();
    
      const isUser= isAuthenticated && user;
      return (
          <nav className="navbar navbar-dark bg-dark text-white d-flex flew-row justify-content-center"> 
          <h2>REACT PORTFOLIO</h2>
          {isUser && user.picture && <img src={user.picture} alt={user.name}/>}
          {isUser && user.name && <h4>Welcome&nbsp;<strong>{user.name}</strong>&nbsp;</h4>}
          {isUser ? (<button onClick={() => {
                logout({ returnTo: window.location.origin });
            }}>Log out</button>
         ): (<button onClick={() => loginWithRedirect()}>Log in</button>) }
         
         </nav>
       
      );
}

export default Navbar
