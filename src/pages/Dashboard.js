import React, { useEffect, useState } from 'react';
import { getPaymentRequests } from '../services/requestNetwork'; // Correct import
import Card from '../components/Card';        // Correct import
import Table from '../components/Table';      // Correct import
import Chart from '../components/Chart';      // Correct import
import Notification from '../components/Notification'; // Correct import

const Dashboard = () => {
  const [requests, setRequests] = useState([]);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await getAllRequests();
        setRequests(data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Card title="Total Payments" value={requests.length} />
      <Table
        columns={['Freelancer', 'Amount', 'Date', 'Status']}
        data={requests.map(req => [req.freelancer, req.amount, req.date, req.status])}
      />
      <Chart
        title="Payments by Status"
        data={{
          labels: ['Completed', 'Pending', 'Overdue'],
          datasets: [
            {
              data: [
                requests.filter(req => req.status === 'completed').length,
                requests.filter(req => req.status === 'pending').length,
                requests.filter(req => req.status === 'overdue').length,
              ],
              backgroundColor: ['#26A688', '#FFCE56', '#FF6384'],
            },
          ],
        }}
      />
      {issues.length > 0 && (
        <Notification message={`There are ${issues.length} payment issues`} type="error" />
      )}
    </div>
  );
};

export default Dashboard;
