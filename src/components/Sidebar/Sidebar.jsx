import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">ByeWind</h2>
      <nav>
        <ul>
          <li>Overview</li>
          <li>Projects</li>
          <li>eCommerce</li>
          <li>Online Courses</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
