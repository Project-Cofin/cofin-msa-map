import React from 'react';
import { Home, Navigation } from 'features/common';
import { Route, Redirect, Switch } from 'react-router-dom'
import { Chat } from 'features/chatbot';
import { Local, World } from 'features/map';

function App() {
  return (<>
    <Navigation/>
    <Switch>
      <Route exact path='/' component = { Home }/>
      <Redirect from='/home' to = { '/' }/>

      <Route exact path='/organ/chat' component= { Chat }/>
      <Route exact path='/organ/local' component= { Local }/>
      <Route exact path='/organ/world' component= { World }/>
    </Switch>
  </>);
}

export default App;
