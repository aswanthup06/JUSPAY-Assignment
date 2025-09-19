import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <input type="text" placeholder="Search..." className="search" />
      <div className="icons">
        <span>🔔</span>
        <span>⚙️</span>
        <span>👤</span>
      </div>
    </header>
  );
}

export default Navbar;
