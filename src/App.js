import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Showcase from './components/Showcase';

import Errors from './components/Errors';
import Numbers from './components/projects/NumFacts';
import Memories from './components/projects/Memories';
import EventShowcase from './components/projects/EventShowcase'

const App=()=> {
  return (
    <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
              <Switch>
                  <Route exact path="/" component={Showcase}  />
                  <Route exact path="/project1" component={Numbers} />
                  <Route exact path="/project2" component={Memories} />
                  <Route exact path="/project3" component={EventShowcase}/>
                 
                  <Route exact path="*" component={Errors}  />
              </Switch>
          </div>
        </React.Fragment> 
    </Router>

  )
}

export default App;
