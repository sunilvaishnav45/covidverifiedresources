import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import VerifiedHospitals from './Components/VerifiedHospitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './Components/Team';

function App() {
  return (
      <>
      <NavBar> </NavBar>
      <Router>
        <Switch>
          <Route exact path='/home' component={VerifiedHospitals} />
          <Route exact path='/team' component={Team} />
        </Switch>
      </Router>
      </>
  );
}

export default App;
