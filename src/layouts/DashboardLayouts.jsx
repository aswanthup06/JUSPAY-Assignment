import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import RightSidebar from "../components/RightSide/RightSidebar";
import Sidebar from "../components/Sidebar/Sidebar";

import "./DashboardLayout.css";

function DashboardLayout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarVisible((prev) => !prev);
  };

  return (
    <div className="dashboard-layout">
      {isSidebarVisible && <Sidebar />}
      <main className="content">
        <Navbar 
          toggleSidebar={toggleSidebar} 
          toggleRightSidebar={toggleRightSidebar} 
        />
        <div className="main-content">{children}</div>
      </main>
      {isRightSidebarVisible && <RightSidebar />}
    </div>
  );
}

export default DashboardLayout;
