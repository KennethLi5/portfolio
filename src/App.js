import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Services from './components/pages/Services'
import Home from './components/pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='' exact component= {Home}/>
          <Route path='/services' component={Services}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
