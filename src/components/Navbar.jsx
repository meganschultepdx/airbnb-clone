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

        #logo-container {
          width: 80px;
          margin-right: 0px;
        }

        #logo {
          margin-top: 20px;
        }

        #navbarContent {
          display: inline;
          float: right;
        }

        #navButtons {
          display: inline-flex;
          padding 40px;
        }

        #host-home, #host-exp, #help, #signUp {
          padding-right: 20px;
          color: white;
          font-family: sans-serif;
          font-size: 1em;
        }

        #logIn {
          color: white;
          font-family: sans-serif;
          font-size: 1em;
        }




        `}</style>

      <header className="navbar"><img id="logo" src={require('../assests/img/airbnb-logo.png')} alt="airbnb logo" width="70px" />
        <div id="navbarContent">
          <div id="navButtons">
            <div id="host-home">Host a home</div>
            <div id="host-exp">Host an experience</div>
            <div id="help">Help</div>
            <div id="signUp">Sign Up</div>
            <div id="logIn">Log In</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
