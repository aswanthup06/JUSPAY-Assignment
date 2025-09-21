import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import './Projection.css';

const data = [
  { month: 'Jan', actual: 8, projection: 12 },
  { month: 'Feb', actual: 12, projection: 15 },
  { month: 'Mar', actual: 18, projection: 16 },
  { month: 'Apr', actual: 15, projection: 18 },
  { month: 'May', actual: 22, projection: 20 },
  { month: 'Jun', actual: 25, projection: 24 },
];

export default function Projection() {
  return (
    <div className="projection-section">
      <div className="projection-header">
        <h3 className="secondary-heading">Projections vs Actuals</h3>
      </div>
      
      <div className="projection-chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }} // Removed all margins
            barSize={30}
            barGap={0}
          >
            <CartesianGrid vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#64748B' }}
              padding={{ left: 10, right: 10 }} // Add padding to prevent cutting off labels
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 10, 20, 30]}
              domain={[0, 30]}
              tick={{ fontSize: 12, fill: '#64748B' }}
              tickFormatter={(value) => `${value}M`}
              width={35}
            />
            <Tooltip
              formatter={(value, name) => {
                const label = name === 'actual' ? 'Actual' : 'Projection';
                return [`${value}M`, label];
              }}
              contentStyle={{
                backgroundColor: '#fff',
                borderRadius: '6px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: 'none'
              }}
            />
            {/* Projection bar (background) */}
            <Bar
              dataKey="projection"
              stackId="a"
              fill="#cde4fdff"
              radius={[2, 2, 0, 0]}
            />
            {/* Actual bar (on top of projection) */}
            <Bar
              dataKey="actual"
              stackId="a"
              fill="#e6f2ff"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}