import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contracts from './pages/Contracts';
import Payments from './pages/Payments';
import Profile from './pages/Profile';
import CreateContract from './pages/CreateContract';
import Analytics from './pages/Analytics';

const App = () => {
  // State for demonstrating form inputs
  const [formData, setFormData] = useState({
    freelancer: '',
    amount: '',
    currency: 'USDT'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted! Data: ' + JSON.stringify(formData));
  };

  return (
    <div className="container">
      <h1>Crypto Freelancer Payment Interface</h1>
      
      {/* Demonstration of Cards */}
      <div className="card">
        <h3>Current Balance</h3>
        <p>1000 USDT</p>
      </div>

      

      {/* Demonstration of Table */}
      <div className="table-container">
        <h3>Freelancer Payments</h3>
        <table>
          <thead>
            <tr>
              <th>Freelancer</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>500</td>
              <td>USDT</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>250</td>
              <td>ETH</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Demonstration of Form */}
      <form onSubmit={handleSubmit}>
        <h3>New Contract</h3>
        <label>Freelancer Name:</label>
        <input
          type="text"
          name="freelancer"
          value={formData.freelancer}
          onChange={handleChange}
          placeholder="Enter freelancer name"
        />
        <label>Amount:</label>
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter amount"
        />
        <label>Currency:</label>
        <select name="currency" value={formData.currency} onChange={handleChange}>
          <option value="USDT">USDT</option>
          <option value="ETH">ETH</option>
        </select>
        <button type="submit">Create Contract</button>
      </form>

      {/* Demonstration of Notification */}
      <div className="notification info">
        This is an info notification.
      </div>
      <div className="notification error">
        This is an error notification.
      </div>
    </div>
  );
};

export default App;
