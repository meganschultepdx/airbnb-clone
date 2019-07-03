import React from 'react';


function App(){
  return (
    <style jsx>{`
    body {
      background-image: url(${Spalsh});
      background-size: cover;
      background-repeat: no-repeat;
    }
    `}</style>
    <div image container>
        <div box offset>
            <div box container>
                <div box title header>
                    <h1>Book unique places to stay and things to do.</h1>
                </div>
                <div input fields>
                    <form id="MagicCarpetSearchBar" action="#">
                    <div where></div>
                    <div check in-out dates></div>
                    <div guest count></div>
                    <div search button></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;