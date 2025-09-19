import DashboardComp from "../Dashboards/Dashboards";
import Favorites from "../Favorites/Favorites";
import Pages from "../Pages/Pages";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="user-section">
        <img
          className="user-section-img"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt=""
        />
        <h2 className="siderbar-text">ByeWind</h2>
      </div>

      <Favorites />
      <DashboardComp />
      <Pages />
    </aside>
  );
}

export default Sidebar;
