import React from 'react'
import { Link } from 'react-router-dom';

function Approve() {
  return (
    <div className="Manage">
      <h1>Manage Donations</h1>
    <nav class="new">
        <Link to="/manage" id="pending">Pending Donations</Link>
        <Link to="/approve" id="pending">Approved Donations</Link>
    </nav>
   
    <section id="pending-donations">
        <h2>Approved Donations</h2>
        <table>
            <tr>
                <th>Donor Name</th>
                <th>Donation Type</th>
                <th>Donation Quantity</th>
            </tr>
            <tr>
                <td>Jiban</td>
                <td>Food</td>
                <td>5 kg</td>
            </tr>
        </table>
    </section>
    
    </div>
  )
}

export default Approve;