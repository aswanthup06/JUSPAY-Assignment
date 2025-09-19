import "./Notifications.css";
import { notificationsData } from "./notificationsData";

function Notifications() {
  return (
    <div>
      <div className="title-section">
        <h2 className="secondary-heading">Notifications</h2>
      </div>

      <div className="notification-card-section">
        {notificationsData.map((notification) => (
          <div key={notification.id} className="notification-card">
            <div className="notification-icon">{notification.icon}</div>
            <div>
              <h2 className="right-side-subtitle">{notification.title}</h2>
              <h2 className="right-side-description">
                {notification.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
