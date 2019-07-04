import React from 'react';
import Spalsh from '../assests/img/spalsh.jpg'


function Home() {
    return (
        <div id="homeComponent">
            <style jsx>{`
        #homeComponent {
            z-index: -1;
            background-size: cover;
            background-repeat: no-repeat;
            position: static;
            display: block;
        }

        #search-form {
            font-family: sans-serif;
            width: 300px;
            border: 2px solid white;
            background-color: white;
            border-radius: 8px;
            z-index: 1;
            top: 20%;
            position: absolute;
            margin-left: 10vw;
        }

        #form-title {
            padding-left: 5px;
        }

        label, input {
            padding: 5px;
            margin: 5px;
            margin-bottom: 10px;
        }

        input {
            border: 2px solid lightgrey;
            background-color: lightgrey;
            border-radius: 4px;
        }
        `}</style>
            <div className="imageContainer">
                <img src={require('../assests/img/spalsh.jpg')} alt="A pretty house" width="100%" />
            </div>
            <div id="search-form">
                <form>
                    <h1 id="form-title">Book unique places to stay and things to do.</h1>
                    <label>Where</label>
                    <input
                        type='text'
                        id="where" />
                    <label>From</label>
                    <input
                        type='date'
                        id="from-dates" />
                    <label>To</label>
                    <input
                        type='date'
                        id="to-dates" />
                    <label>Number of Guests</label>
                    <input
                        type='number'
                        id="guestNum" />
                    <button type='submit'>Search</button>
                </form>
            </div>
        </div>
    );
}

export default Home;