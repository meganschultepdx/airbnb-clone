import React from 'react';
import Header from './Header';
import Home from './Home';
import NewTicketForm from './NewTicketForm';
import { Switch, Route } from 'react-router-dom';

function Apples(){
  var mainStyles = {
    display: 'contents'
  };

  return (
    <div style={mainStyles}>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/newticket' component={NewTicketForm} />
        </Switch>
    </div>
  );
}

export default Apples;