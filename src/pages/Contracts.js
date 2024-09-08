import React, { useEffect, useState } from 'react';
import  { getPaymentRequests, createPaymentRequest } from '../services/requestNetwork';  // Assuming this path is correct
import Button from '../components/Button';  // Corrected import for Button component
import Table from '../components/Table';    // Corrected import for Table component
import Modal from '../components/Modal';    // Corrected import for Modal component

const Contracts = () => {
  const [contracts, setContracts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newContract, setNewContract] = useState({ freelancer: '', amount: '', currency: 'USDT' });

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const data = await getAllRequests();
        setContracts(data);
      } catch (error) {
        console.error('Error fetching contracts:', error);
      }
    };

    fetchContracts();
  }, []);

  const handleCreateContract = async () => {
    try {
      await createRequest(newContract);
      const updatedContracts = await getAllRequests();
      setContracts(updatedContracts);
      setShowModal(false);
    } catch (error) {
      console.error('Error creating contract:', error);
    }
  };

  return (
    <div className="contracts">
      <h1>Contracts</h1>
      <Button text="Create New Contract" onClick={() => setShowModal(true)} />
      <Table
        columns={['Freelancer', 'Amount', 'Currency', 'Date', 'Status']}
        data={contracts.map(contract => [
          contract.freelancer,
          contract.amount,
          contract.currency,
          contract.date,
          contract.status,
        ])}
      />
      {showModal && (
        <Modal title="Create New Contract" onClose={() => setShowModal(false)}>
          <label>Freelancer:</label>
          <input
            type="text"
            value={newContract.freelancer}
            onChange={(e) => setNewContract({ ...newContract, freelancer: e.target.value })}
          />
          <label>Amount:</label>
          <input
            type="text"
            value={newContract.amount}
            onChange={(e) => setNewContract({ ...newContract, amount: e.target.value })}
          />
          <label>Currency:</label>
          <select
            value={newContract.currency}
            onChange={(e) => setNewContract({ ...newContract, currency: e.target.value })}
          >
            <option value="USDT">USDT</option>
            <option value="ETH">ETH</option>
          </select>
          <Button text="Create Contract" onClick={handleCreateContract} />
        </Modal>
      )}
    </div>
  );
};

export default Contracts;
