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
          <Route path='' exact component= {Home}/>
          <Route path='/Polly' component={Polly}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
