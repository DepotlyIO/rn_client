// src/pages/CreateContract.js

import React, { useState } from 'react';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { createPaymentRequest } from '../services/requestNetwork'; // Correct import

const CreateContract = () => {
  const [formData, setFormData] = useState({
    freelancer: '',
    amount: '',
    currency: 'ETH',
    payerAddress: '0xYourPayerAddress',
  });

  const handleCreateContract = async () => {
    try {
      const { freelancer, amount, currency, payerAddress } = formData;
      await createPaymentRequest(payerAddress, currency, amount, freelancer);
      alert('Contract created successfully!');
    } catch (error) {
      alert('Failed to create contract');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create New Contract</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="freelancer"
          value={formData.freelancer}
          onChange={(e) => setFormData({ ...formData, freelancer: e.target.value })}
          placeholder="Freelancer Address"
        />
        <input
          type="text"
          name="amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          placeholder="Amount"
        />
        <select
          name="currency"
          value={formData.currency}
          onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
        >
          <option value="ETH">ETH</option>
          <option value="USDT">USDT</option>
        </select>
        <button type="button" onClick={handleCreateContract}>
          Create Contract
        </button>
      </form>
    </div>
  );
};

export default CreateContract;
