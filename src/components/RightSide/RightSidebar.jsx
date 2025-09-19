import Activities from "../Activities/Activities";
import Contacts from "../Contacts/Contacts";
import Notifications from "../Notifications/Notifications";
import "./RightSidebar.css";

function RightSidebar() {
  return (
    <aside className="right-sidebar hide-scrollbar">
      <Notifications />
      <Activities />
      <Contacts />
    </aside>
  );
}

export default RightSidebar;
