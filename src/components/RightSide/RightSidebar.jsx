import "./RightSidebar.css";

function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/80"
          alt="User Avatar"
          className="profile-img"
        />
        <h3 className="profile-name">John Doe</h3>
        <p className="profile-role">UI Developer</p>
      </div>

      <div className="quick-links">
        <h4>Quick Links</h4>
        <ul>
          <li>Settings</li>
          <li>Notifications</li>
          <li>Help</li>
        </ul>
      </div>
    </aside>
  );
}

export default RightSidebar;
