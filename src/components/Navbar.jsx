import React from 'react';


function Navbar(){
  return (
    <div>
      <style jsx>{`
        .navbar {
          width: 100%;
          background: rgb(255, 255, 255, 0);
          position: fixed;
          top: 0;
          }

        #logo {
          margin-top: 10px;
        }



        `}</style>

      <header className="navbar">
        <div id="logo"><img src={require('../assests/img/airbnb-logo.png')} alt="airbnb logo" width="60px" /></div>
        <div id="nav-bar-spacer"></div>
        <div className="navbarContent">
          <div id="navButtons">
            <div className="host-home">Host a home</div>
            <div className="host-exp">Host an experience</div>
            <div className="help">Help</div>
            <div className="signUp">Sign Up</div>
            <div className="logIn">Log In</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
