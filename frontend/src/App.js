import React from 'react';
import { Home, Navigation } from 'features/common';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
// import { Route, Redirect, Switch } from 'react-router';
import { Chat, Chat2, Chat3, Chat4 } from 'features/chatbot';
import { LocalMapPage, WorldMapPage } from 'features/map';

function App() {
  return (<>
  {/* <ToastProvider placement="bottom-left"> */}
    {/* <Router> */}
    <Navigation/>
    <Switch>
      <Route exact path='/' component = { Home }/>
      <Redirect from='/home' to = { '/' }/>

      <Route exact path='/organ/chat' component= { Chat }/>
      <Route exact path='/organ/chat2' component= { Chat2 }/>
      <Route exact path='/organ/local' component= { LocalMapPage }/>
      <Route exact path='/organ/world' component= { WorldMapPage }/>
    </Switch>
    {/* </Router> */}
  {/* </ToastProvider> */}
  </>);
}

export default App;
