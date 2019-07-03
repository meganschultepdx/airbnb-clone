import React from 'react';

function Navbar(){
  return (
    <div>
      <header>
        <div id="logo"><i className="fab fa-airbnb"></i></div>
        <div id="nav-bar-spacer"></div>
        <div className="navbarContent">
          <nav>
            <ul>
              <li className="host-home">Host a home</li>
              <li className="host-exp">Host an experience</li>
              <li className="help">Help</li>
              <li className="signUp">Sign Up</li>
              <li className="logIn">Log In</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
