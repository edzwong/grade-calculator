import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import GradeCalculator from './pages/GradeCalculator/GradeCalculator';
import GpaCalculator from './pages/GpaCalculator/GpaCalculator';

import './App.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <Redirect exact from="/" to="/grade"/>
        <Route exact path="/grade" component={GradeCalculator}/>
        <Route exact path="/gpa" component={GpaCalculator}/>
      </Switch>
    </div>
  );
}

export default App;
