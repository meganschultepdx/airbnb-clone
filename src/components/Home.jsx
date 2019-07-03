import React from 'react';
import Spalsh from '../assests/img/spalsh.jpg'

function Home(){
  return (
    <div id="homeComponent">
        <style jsx>{`
        #homeComponent {
        
        background-size: cover;
        background-repeat: no-repeat;
        position: static;
        display: block;
        }
        `}</style>
        <div className="imageContainer">
        <img src={require('../assests/img/spalsh.jpg')} alt="A pretty house" width="100%"/>
            <div className="boxOffset">
                <div className="boxContainer">
                    <div className="boxTitleHeader">
                        <h1>Book unique places to stay and things to do.</h1>
                    </div>
                    <div className="inputField">
                        <form id="MagicCarpetSearchBar" action="">
                        <div className="where"></div>
                        <div className="dates"></div>
                        <div className="guestNum"></div>
                        <div className="searchSubmit"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;