import DashboardLayout from "../layouts/DashboardLayouts";
import Card from "../components/Card/Card";
import "./Dashboard.css";

function Dashboard() {
  return (
    <DashboardLayout>
      <div>
        <h2 className="secondary-heading">eCommerce</h2>
      </div>

      <div className="main-sections">
      <div className="dashboard-grid">
        <div className="dashboard-grid-left">
          <Card title="Customers" value="3,781" change="+11.01%" />
          <Card title="Orders" value="1,219" change="-0.03%" />
          <Card title="Revenue" value="$695" change="+15.03%" />
          <Card title="Growth" value="30.1%" change="+6.08%" />
        </div>

        <div className="dashboard-grid-right"></div>
      </div>

      <div className="dashboard-grid-two">
        <div className="dashboard-grid-right"></div>
        <div className="dashboard-grid-right"></div>
      </div>

      <div className="dashboard-grid-three">
        <div className="dashboard-grid-right"></div>
        <div className="dashboard-grid-right"></div>
      </div>
</div>

    </DashboardLayout>
  );
}

export default Dashboard;
