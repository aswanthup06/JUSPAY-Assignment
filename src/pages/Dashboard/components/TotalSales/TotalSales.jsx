import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import "./TotalSales.css";

function TotalSales() {
  const data = [
    { name: 'Direct', value: 300.56, color: 'rgba(28, 28, 28, 1)' },
    { name: 'Affiliate', value: 135.18, color: 'rgba(186, 237, 189, 1)' },
    { name: 'Sponsored', value: 154.02, color: 'rgba(149, 164, 252, 1)' },
    { name: 'E-mail', value: 48.96, color: 'rgba(177, 227, 255, 1)' }
  ];

  return (
    <div className="total-sales-section">
      <div className="total-sales-header">
        <h2 className="secondary-heading">Total Sales</h2>
        <div className="percentage-indicator">
          38.6%
        </div>
      </div>
      
      <div className="sales-content">
        <div className="chart-container">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
                cornerRadius={10} 
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
       


      </div>

       <div className="sales-breakdown">
          <div className="sales-category">
            <div className="category-info">
              <div className="category-dot direct"></div>
              <span className="titles-two">Direct</span>
            </div>
            <span className="titles-two">$300.56</span>
          </div>
          
          <div className="sales-category">
            <div className="category-info">
              <div className="category-dot affiliate"></div>
              <span className="titles-two">Affiliate</span>
            </div>
            <span className="titles-two">$135.18</span>
          </div>
          
          <div className="sales-category">
            <div className="category-info">
              <div className="category-dot sponsored"></div>
              <span className="titles-two">Sponsored</span>
            </div>
            <span className="titles-two">$154.02</span>
          </div>
          
          <div className="sales-category">
            <div className="category-info">
              <div className="category-dot email"></div>
              <span className="titles-two">E-mail</span>
            </div>
            <span className="titles-two">$48.96</span>
          </div>
        </div>
    </div>
  );
}

export default TotalSales;