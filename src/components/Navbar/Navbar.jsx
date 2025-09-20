import { useState, useEffect } from "react";
import SvgSun from "./IconComps/IconSun";
import SvgHistory from "./IconComps/History";
import SvgBell from "./IconComps/Bell";
import SvgSide from "./IconComps/Side";
import SvgStar from "./IconComps/SvgStar";
import "./Navbar.css";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply class to body when darkMode changes
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
        <button className="nav-buttons">
          <SvgSide className="icon-set"  />
        </button>
        <button className="nav-buttons">
          <SvgStar className="icon-set"  />
        </button>
        <div>
          <h3 className="nav-text">Dashboards / Default</h3>
        </div>
      </div>

      <div className="nav-right-section">
        <div>
          <input type="text" placeholder="Search..." className="search" />
        </div>
        <div className="nav-right-buttons">
          <button
            className="nav-buttons"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            <SvgSun className="icon-set" />
          </button>
          <button className="nav-buttons">
            <SvgHistory className="icon-set"  />
          </button>
          <button className="nav-buttons">
            <SvgBell className="icon-set"  />
          </button>
          <button className="nav-buttons">
            <SvgSide className="icon-set"  />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
