import React from 'react';

function Manage() {
  return (
    <div className="Manage">
      <h1>Manage Donations</h1>
    <nav class="new">
        <a href="#pending-donations">Pending Donations</a>
        <a href="#approved-donations">Approved Donations</a>
        <a href="#declined-donations">Declined Donations</a>
    </nav>
    <section id="pending-donations">
        <h2>Pending Donations</h2>
        <table>
            <tr>
                <th>Donor Name</th>
                <th>Donation Type</th>
                <th>Donation Quantity</th>
                <th>Actions</th>
            </tr>
            <tr>
                <td>John Doe</td>
                <td>Food</td>
                <td>20 kg</td>
                <td>
                    <a href="#">Approve</a>
                    <a href="#">Decline</a>
                </td>
            </tr>
        </table>
    </section>
    <section id="approved-donations">
        <h2>Approved Donations</h2>
        <table>
            <tr>
                <th>Donor Name</th>
                <th>Donation Type</th>
                <th>Donation Quantity</th>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>Food</td>
                <td>15 kg</td>
            </tr>
        </table>
    </section>
    <section id="declined-donations">
        <h2>Declined Donations</h2>
        <table>
            <tr>
                <th>Donor Name</th>
                <th>Donation Type</th>
                <th>Donation Quantity</th>
                <th>Reason for Decline</th>
            </tr>
            <tr>
                <td>Mark Johnson</td>
                <td>Food</td>
                <td>10 kg</td>
                <td>Expired</td>
            </tr>
        </table>
    </section>
    <footer>
      <p>Copyright ©2023 Food Management System</p>
    </footer>
    </div>
  );
}

export default Manage;
