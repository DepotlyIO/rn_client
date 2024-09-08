import React from 'react';
import { Pie } from 'react-chartjs-2';

const Chart = ({ title, data }) => (
  <div className="chart">
    <h3>{title}</h3>
    <Pie data={data} />
  </div>
);

export default Chart;
