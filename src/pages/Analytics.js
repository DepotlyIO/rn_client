import React, { useEffect, useState } from 'react';
import { getPaymentRequests } from '../services/requestNetwork';  // Keep this path if correct
import Chart from '../components/Chart';  // Ensure Chart.js exists in the components folder
import Table from '../components/Table';  // Ensure Table.js exists in the components folder

const Analytics = () => {
    const [requests, setRequests] = useState([]);
  
    useEffect(() => {
      const fetchRequests = async () => {
        try {
          const data = await getPaymentRequests('0xYourPayerAddress'); // Replace with actual address
          setRequests(data);
        } catch (error) {
          console.error('Error fetching payment requests:', error);
        }
      };
  
      fetchRequests();
    }, []);
    
  const totalSpent = payments.reduce((total, payment) => total + parseFloat(payment.amount || 0), 0);

  return (
    <div className="analytics">
      <h1>Analytics</h1>
      <Chart
        title="Payments by Status"
        data={{
          labels: ['Completed', 'Pending', 'Overdue'],
          datasets: [
            {
              data: [
                payments.filter(p => p.status === 'completed').length,
                payments.filter(p => p.status === 'pending').length,
                payments.filter(p => p.status === 'overdue').length,
              ],
              backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
            },
          ],
        }}
      />
      <Chart
        title="Total Spent"
        data={{
          labels: ['Total Spent'],
          datasets: [
            {
              data: [totalSpent],
              backgroundColor: ['#4CAF50'],
            },
          ],
        }}
      />
      <Table
        columns={['Freelancer', 'Amount', 'Currency', 'Status', 'Date']}
        data={payments.map(payment => [
          payment.freelancer,
          payment.amount,
          payment.currency,
          payment.status,
          payment.date,
        ])}
      />
    </div>
  );
};

export default Analytics;
