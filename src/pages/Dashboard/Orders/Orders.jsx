import React, { useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayouts";
import "./orders.css";
import SvgPlus from "./IconsComps/Plus";
import SvgFilter from "./IconsComps/Filter";
import SvgArrows from "./IconsComps/Arrows";
import { ordersData } from "./ordersData";
import SvgCalendar from "./IconsComps/Calendar";
import SvgSearch from "../../../components/icons/Search";
import SvgDot from "./IconsComps/Dot";
import SvgLeft from "./IconsComps/Left";
import SvgRight from "./IconsComps/Right";

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const filteredOrders = ordersData.filter(
    (order) =>
      order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "in progress":
        return "status-in-progress";
      case "complete":
        return "status-complete";
      case "pending":
        return "status-pending";
      case "approved":
        return "status-approved";
      case "rejected":
        return "status-rejected";
      default:
        return "";
    }
  };

  const handleOrderSelect = (orderId) => {
    if (selectedOrders.includes(orderId))
      setSelectedOrders(selectedOrders.filter((id) => id !== orderId));
    else setSelectedOrders([...selectedOrders, orderId]);
  };

  const handleSelectAll = () => {
    if (selectAll) setSelectedOrders([]);
    else setSelectedOrders(currentOrders.map((order) => order.id));
    setSelectAll(!selectAll);
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrev = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  const handleNext = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));

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
              <div className="search-box-order">
                <div className="search-icon-box-order">
                  <SvgSearch />
                </div>
                <input
                  type="text"
                  className="search-order"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
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
                      disabled={currentOrders.length === 0}
                    />
                  </th>
                  <th>Order ID</th>
                  <th>User</th>
                  <th>Project</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className={
                      selectedOrders.includes(order.id) ? "selected" : ""
                    }
                  >
                    <td>
                      <div>
                        <input
                          type="checkbox"
                          checked={selectedOrders.includes(order.id)}
                          onChange={() => handleOrderSelect(order.id)}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="order-id">{order.id}</div>
                    </td>
                    <td>
                      <div className="profile-table-box">
                        <img
                          className="profile-table"
                          src={order.avatar}
                          alt={order.user}
                        />
                        <span>{order.user}</span>
                      </div>
                    </td>
                    <td>
                      <div>{order.project}</div>
                    </td>
                    <td>
                      <div>{order.address}</div>
                    </td>
                    <td>
                      <div className="date-box">
                        <SvgCalendar />
                        {order.date}
                      </div>
                    </td>
                    <td>
                      <div className="status-dot-wrapper">
                        <SvgDot className={getStatusClass(order.status)} />
                        <span
                          className={`status-badge ${getStatusClass(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {currentOrders.length === 0 && (
              <div className="no-results">
                <p>No orders found matching your search.</p>
              </div>
            )}
          </div>

          <div className="pagination-section">
            <div className="pagination-section-inner">
              <div className="icon-box" onClick={handlePrev}>
                <SvgLeft />
              </div>

              {Array.from({ length: totalPages }, (_, i) => (
                <div
                  key={i}
                  className={`number-box titles ${
                    currentPage === i + 1 ? "number-box-active" : ""
                  }`}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </div>
              ))}

              <div className="icon-box" onClick={handleNext}>
                <SvgRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
