import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import VerifiedHospitals from './Components/VerifiedHospitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './Components/Team';
import './App.css';
import CasesReport from './Components/CasesReport';

function App() {
  return (
      <>
      <NavBar> </NavBar>
      <Router>
        <Switch>
          <Route exact path='/home' component={VerifiedHospitals} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/cases' component={CasesReport} />
        </Switch>
      </Router>
      </>
  );
}

export default App;
