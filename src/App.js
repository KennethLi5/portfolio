import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Polly from './components/pages/Polly'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Home}/>
          <Route path='/VRSub' component={() => {window.location.replace('https://github.com/KennethLi5/VRSub'); return null;}}/>
          <Route path='/DiscordBot' component={() => {window.location.replace('https://github.com/KennethLi5/discord-tts-bot'); return null;}}/> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
