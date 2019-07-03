import React from 'react';
{/*import SeasonalProduceList from './SeasonalProduceList';*/}

function App(){
  return (
    <div id="homePage">
      <MarketList/>
      {/*<SeasonalProduceList/>*/}
      <style jsx global>{`
        #homePage {
          font-family: sans-serif;
        }
        `}</style>

    </div>
  );
}

export default App;