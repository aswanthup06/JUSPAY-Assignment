import DashboardLayout from "../../layouts/DashboardLayouts";
import Card from "../../components/Card/Card";
import "./Dashboard.css";
import TopSelling from "./components/TopSelling/TopSelling";
import Location from "./components/Location/Location";
import TotalSales from "./components/TotalSales/TotalSales";
import Revenue from "./components/Revenue/Revenue";

function Dashboard() {
  return (
    <DashboardLayout>
      <div>
        <h2 className="secondary-heading">eCommerce</h2>
      </div>

      <div className="main-sections">
        <div className="dashboard-grid">
          <div className="dashboard-grid-left">
            <Card
              className="customers-card"
              title="Customers"
              value="3,781"
              change="+11.01%"
              link="/orders"
            />
            <Card
              className="orders-card"
              title="Orders"
              value="1,219"
              change="-0.03%"
              link="/orders"
            />
            <Card
              className="revenue-card"
              title="Revenue"
              value="$695"
              change="+15.03%"
              link="/orders"
            />
            <Card
              className="growth-card"
              title="Growth"
              value="30.1%"
              change="+6.08%"
              link="/orders"
            />
          </div>

          <div className="dashboard-grid-right"></div>
        </div>

        <div className="dashboard-grid-two">
          <div className="dashboard-grid-right">
            <Revenue />{" "}
          </div>
          <div className="dashboard-grid-right">
            <Location />
          </div>
        </div>

        <div className="dashboard-grid-three">
          <div className="dashboard-grid-right">
            <TopSelling />
          </div>
          <div className="dashboard-grid-right">
            <TotalSales />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
