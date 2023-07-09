import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import Coursedetails from './Coursedetails';

const App=()=>{
  return(
    <>
<Router>
  <Routes>
    <Route exact path='/' Component={Home} />
    <Route exact path='/navbar' Component={Navbar} />
    <Route exact path='/coursedetails' Component={Coursedetails} />
  </Routes>
</Router>
    </>
  );
}

export default App;