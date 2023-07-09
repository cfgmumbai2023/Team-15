import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marks from "./cQuizMarks";
import Home from "./cQuizHome";

const App=()=>{
  return(
 <Router>
  <Routes>
  <Route exact path="/" Component={Home}/>
    <Route exact path="/marks" Component={Marks}/>
  </Routes>
 </Router>
  )
}

export default App;