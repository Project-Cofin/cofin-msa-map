import React from 'react';
import { Home, Navigation } from 'features/common';
import { Route, Redirect, Switch } from 'react-router-dom'
import { Chat } from 'features/chatbot';
import { LocalMapPage, WorldMapPage } from 'features/map';
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (<>
  {/* <ToastProvider placement="bottom-left"> */}
    <Navigation/>
    <Switch>
      <Route exact path='/' component = { Home }/>
      <Redirect from='/home' to = { '/' }/>

      <Route exact path='/organ/chat' component= { Chat }/>
      <Route exact path='/organ/local' component= { LocalMapPage }/>
      <Route exact path='/organ/world' component= { WorldMapPage }/>
    </Switch>
  {/* </ToastProvider> */}
  </>);
}

export default App;
