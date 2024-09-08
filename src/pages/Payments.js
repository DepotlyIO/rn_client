import React, { useEffect, useState } from 'react';
import { getPaymentRequests } from '../services/requestNetwork'; // Correct import
import Table from '../components/Table';     // Correct import
import Button from '../components/Button';   // Correct import
import Notification from '../components/Notification'; // Correct import

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await getAllRequests();
        setPayments(data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, []);

  const filteredPayments = payments.filter(payment => {
    if (filter === 'all') return true;
    return payment.status === filter;
  });

  return (
    <div className="payments">
      <h1>Payments</h1>
      <div className="filters">
        <Button text="All" onClick={() => setFilter('all')} />
        <Button text="Completed" onClick={() => setFilter('completed')} />
        <Button text="Pending" onClick={() => setFilter('pending')} />
        <Button text="Overdue" onClick={() => setFilter('overdue')} />
      </div>
      <Table
        columns={['Freelancer', 'Amount', 'Currency', 'Status', 'Date']}
        data={filteredPayments.map(payment => [
          payment.freelancer,
          payment.amount,
          payment.currency,
          payment.status,
          payment.date,
        ])}
      />
      {filteredPayments.length === 0 && (
        <Notification message="No payments to show" type="info" />
      )}
    </div>
  );
};

export default Payments;
