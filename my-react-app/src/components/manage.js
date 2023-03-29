import React from 'react';
import {Link} from "react-router-dom";


function Manage() {
  return (
    <div className="Manage bg-green-200">
      <h1>Manage Donations</h1>
    <nav class="new">
    <Link to="/manage" id="pending">Pending Donations</Link>
        <Link to="/approve" id="pending">Approved Donations</Link>
        
    </nav>
    <section id="pending-donations">
        <h2>Pending Donations</h2>
        <table>
            <tr>
                <th>Donor Name</th>
                <th>Donation Type</th>
                <th>Donation Quantity</th>
                
            </tr>
            <tr>
                <td>John Doe</td>
                <td>Food</td>
                <td>20 kg</td>
                
            </tr>
        </table>
    </section>
    
    </div>
  );
}

export default Manage;
