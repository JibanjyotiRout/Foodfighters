import React from 'react';
import Manage from './manage';
import {Link} from "react-router-dom";
  
function Donate() {
  return (
    <div className="Donate">
      <header>
      <h1>Food Management System</h1>
    </header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/donate">Donate Food</Link></li>
        <li><Link to="/manage">Manage Donations</Link></li>
        <li><Link to="/distribute">View Distribution</Link></li>
      </ul>
    </nav>

    </div>
  );
}

export default Donate;
