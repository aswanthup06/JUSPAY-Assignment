import DashboardLayout from "../layouts/DashboardLayouts";
import Card from "../components/Card/Card";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="dashboard-grid">
        <Card title="Customers" value="3,781" change="+11.01%" />
        <Card title="Orders" value="1,219" change="-0.03%" />
        <Card title="Revenue" value="$695" change="+15.03%" />
        <Card title="Growth" value="30.1%" change="+6.08%" />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
