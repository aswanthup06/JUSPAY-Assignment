import React, { useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayouts";
import "./orders.css";
import SvgPlus from "./IconsComps/Plus";
import SvgFilter from "./IconsComps/Filter";
import SvgArrows from "./IconsComps/Arrows";
import { ordersData } from "./ordersData"; // Importing from separate data file
import SvgCalendar from "./IconsComps/Calendar";

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Function to handle sorting
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Sort orders based on configuration
  const sortedOrders = React.useMemo(() => {
    if (!sortConfig.key) return ordersData;
    
    return [...ordersData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }, [ordersData, sortConfig]);

  // Filter orders based on search term
  const filteredOrders = sortedOrders.filter(order => 
    order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to determine status class
  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case "in progress": return "status-in-progress";
      case "complete": return "status-complete";
      case "pending": return "status-pending";
      case "approved": return "status-approved";
      case "rejected": return "status-rejected";
      default: return "";
    }
  };

  // Handle individual order selection
  const handleOrderSelect = (orderId) => {
    if (selectedOrders.includes(orderId)) {
      setSelectedOrders(selectedOrders.filter(id => id !== orderId));
    } else {
      setSelectedOrders([...selectedOrders, orderId]);
    }
  };

  // Handle select all orders
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map(order => order.id));
    }
    setSelectAll(!selectAll);
  };

  // Update selectAll state when selectedOrders changes
  React.useEffect(() => {
    if (filteredOrders.length > 0 && selectedOrders.length === filteredOrders.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedOrders, filteredOrders]);

  return (
    <DashboardLayout>
      <div className="orders-container">
        <div className="order-head">
          <h2 className="secondary-heading">Orders</h2>
        </div>

        <div className="table-section">
          <div className="table-top">
            <div className="table-top-left">
              <div className="table-icon">
                <SvgPlus />
              </div>
              <div className="table-icon">
                <SvgFilter />
              </div>
              <div className="table-icon">
                <SvgArrows />
              </div>
            </div>

            <div className="table-top-right">
              <input 
                type="text" 
                placeholder="Search orders..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="table-container">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      disabled={filteredOrders.length === 0}
                    />
                  </th>
                  <th onClick={() => requestSort('id')}>
                    Order ID {sortConfig.key === 'id' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => requestSort('user')}>
                    User {sortConfig.key === 'user' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => requestSort('project')}>
                    Project {sortConfig.key === 'project' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => requestSort('address')}>
                    Address {sortConfig.key === 'address' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => requestSort('date')}>
                  
                    Date {sortConfig.key === 'date' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                  </th>
                  <th onClick={() => requestSort('status')}>
                    Status {sortConfig.key === 'status' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => (
                  <tr key={index} className={selectedOrders.includes(order.id) ? 'selected' : ''}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => handleOrderSelect(order.id)}
                      />
                    </td>
                    <td className="order-id">{order.id}</td>
                    <td>{order.user}</td>
                    <td>{order.project}</td>
                    <td>{order.address}</td>
                    <td className="date-box">  <SvgCalendar/>{order.date}</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {filteredOrders.length === 0 && (
              <div className="no-results">
                <p>No orders found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}