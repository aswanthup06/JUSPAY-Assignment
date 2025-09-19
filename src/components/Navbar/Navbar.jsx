import SvgIconSet from "../icons/IconSet";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left-section">
        <button className="nav-buttons"><SvgIconSet /></button>
        <button className="nav-buttons">1</button>
        <div>
          <h3 className="nav-text">Dashboards / Default</h3>
        </div>
      </div>

      <div className="nav-right-section">
        <div>
          <input type="text" placeholder="Search..." className="search" />
        </div>
        <div className="nav-right-buttons">
          <button className="nav-buttons">1</button>
          <button className="nav-buttons">1</button>
          <button className="nav-buttons">1</button>
          <button className="nav-buttons">1</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
