import { useState, useEffect, useRef } from "react";
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

  const [isSidebarVisible, setIsSidebarVisible] = useState(width > 1080);
  const [isRightSidebarVisible, setIsRightSidebarVisible] = useState(width > 1200);

  const sidebarRef = useRef(null);
  const rightSidebarRef = useRef(null);

  useEffect(() => {
    setIsSidebarVisible(width > 1080);
    setIsRightSidebarVisible(width > 1200);
  }, [width]);

  const toggleSidebar = () => {
    if (width <= 1200) {
      setIsSidebarVisible((prev) => !prev);
      setIsRightSidebarVisible(false);
    } else {
      setIsSidebarVisible((prev) => !prev);
    }
  };

  const toggleRightSidebar = () => {
    if (width <= 1200) {
      setIsRightSidebarVisible((prev) => !prev);
      setIsSidebarVisible(false);
    } else {
      setIsRightSidebarVisible((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        width <= 1080 &&
        isSidebarVisible &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarVisible(false);
      }

      if (
        width <= 1200 &&
        isRightSidebarVisible &&
        rightSidebarRef.current &&
        !rightSidebarRef.current.contains(event.target)
      ) {
        setIsRightSidebarVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [width, isSidebarVisible, isRightSidebarVisible]);

  return (
    <div className="dashboard-layout">
      <div
        ref={sidebarRef}
        className={width <= 1080 ? "sidebar-div" : ""}
      >
        {isSidebarVisible && <Sidebar />}
      </div>
      <main className="content">
        <Navbar
          toggleSidebar={toggleSidebar}
          toggleRightSidebar={toggleRightSidebar}
        />
        <div className="main-content">{children}</div>
      </main>
      <div
        ref={rightSidebarRef}
        className={width <= 1200 ? "sidebar-div2" : ""}
      >
        {isRightSidebarVisible && <RightSidebar />}
      </div>
    </div>
  );
}

export default DashboardLayout;
