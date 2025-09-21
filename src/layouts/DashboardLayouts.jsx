import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import RightSidebar from "../components/RightSide/RightSidebar";
import Sidebar from "../components/Sidebar/Sidebar";
import "./DashboardLayout.css";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function DashboardLayout({ children }) {
  const width = useWindowWidth();

  // Default visibility based on width
  const [isSidebarVisible, setIsSidebarVisible] = useState(width > 1080);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(width > 1200); // changed to 1200

  useEffect(() => {
    // Adjust visibility on resize
    setIsSidebarVisible(width > 1080);
    setIsRightSidebarVisible(width > 1200); // changed to 1200
  }, [width]);

  const toggleSidebar = () => {
    if (width <= 1200) {
      setIsSidebarVisible((prev) => !prev);
      setIsRightSidebarVisible(false); // close right sidebar
    } else {
      setIsSidebarVisible((prev) => !prev);
    }
  };

  const toggleRightSidebar = () => {
    if (width <= 1200) {
      setIsRightSidebarVisible((prev) => !prev);
      setIsSidebarVisible(false); // close left sidebar
    } else {
      setIsRightSidebarVisible((prev) => !prev);
    }
  };

  return (
    <div className="dashboard-layout">
      <div className={width <= 1080 ? "sidebar-div" : ""}>
        {isSidebarVisible && <Sidebar />}
      </div>
      <main className="content">
        <Navbar
          toggleSidebar={toggleSidebar}
          toggleRightSidebar={toggleRightSidebar}
        />
        <div className="main-content">{children}</div>
      </main>
      <div className={width <= 1200 ? "sidebar-div2" : ""}>
        {isRightSidebarVisible && <RightSidebar />}
      </div>
    </div>
  );
}

export default DashboardLayout;
