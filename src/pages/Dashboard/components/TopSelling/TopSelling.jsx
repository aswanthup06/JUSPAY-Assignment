import React from "react";
import topSellingData from "./topSellingData";
import "./topselling.css"

function TopSelling() {
  return (
    <div>
      <div>
        <h2 className="secondary-heading">Top Selling Products</h2>
      </div>

      <table className="top-selling-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {topSellingData.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td>${product.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopSelling;
