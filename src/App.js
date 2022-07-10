import React from 'react';
import Login from './Login/Login';
import DashBoard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  
    
        <Router >
            <Routes>
            <Route path="/Dashboard" element={<DashBoard />} />
              <Route path="/login" element={<Login />} />
            </Routes >
        </Router>

     
  );
}
export default App;
