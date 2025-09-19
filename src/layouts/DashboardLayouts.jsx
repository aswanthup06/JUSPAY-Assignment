import Navbar from "../components/Navbar/Navbar";
import RightSidebar from "../components/RightSide/RightSidebar";
import Sidebar from "../components/Sidebar/Sidebar";

import "./DashboardLayout.css";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="content">
        <Navbar />
        <div className="main-content">{children}</div>
      </main>
      <RightSidebar />
    </div>
  );
}

export default DashboardLayout;
