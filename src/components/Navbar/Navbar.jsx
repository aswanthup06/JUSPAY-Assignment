import SvgSun from "./IconComps/IconSun";
import SvgHistory from "./IconComps/History";
import SvgBell from "./IconComps/Bell";
import SvgSide from "./IconComps/Side";
import SvgStar from "./IconComps/SvgStar";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left-section">
        <button className="nav-buttons">
          <SvgSide />
        </button>
        <button className="nav-buttons">
          <SvgStar />
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
          <button className="nav-buttons">
            <SvgSun />
          </button>
          <button className="nav-buttons">
            <SvgHistory />
          </button>
          <button className="nav-buttons">
            <SvgBell />
          </button>
          <button className="nav-buttons">
            <SvgSide />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
