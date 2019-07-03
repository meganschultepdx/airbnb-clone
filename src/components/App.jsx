import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';



function App(){
  return (
    <div>
      
      <Navbar/>
      <Home/>
      
    </div>
  );
}

export default App;