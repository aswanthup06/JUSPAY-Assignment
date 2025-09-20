import React, { useState, useEffect } from "react";
import SvgSun from "./IconComps/IconSun";
import SvgHistory from "./IconComps/History";
import SvgBell from "./IconComps/Bell";
import SvgSide from "./IconComps/Side";
import SvgStar from "./IconComps/SvgStar";
import SvgSearch from "../../components/icons/Search";
import SvgText from "../../components/icons/Text";
import "./Navbar.css";

function Navbar({ toggleSidebar, toggleRightSidebar }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="navbar">
      <div className="nav-left-section">
        <button className="nav-buttons" onClick={toggleSidebar}>
          <SvgSide className="icon-set" />
        </button>
        <button className="nav-buttons">
          <SvgStar className="icon-set" />
        </button>
        <div className="location-nav">
          <h3 className="titles">
            <span className="nav-text ">Dashboards / </span>Default
          </h3>
        </div>
      </div>

      <div className="nav-right-section">
        <div className="search-box">
          <div className="search-icon-box">
            <SvgSearch />
            <input type="text" placeholder="Search..." className="search" />
          </div>

          <SvgText />
        </div>

        <div className="nav-right-buttons">
          <button
            className="nav-buttons"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            <SvgSun className="icon-set" />
          </button>
          <button className="nav-buttons">
            <SvgHistory className="icon-set" />
          </button>
          <button className="nav-buttons">
            <SvgBell className="icon-set" />
          </button>
          <button className="nav-buttons" onClick={toggleRightSidebar}>
            <SvgSide className="icon-set" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
