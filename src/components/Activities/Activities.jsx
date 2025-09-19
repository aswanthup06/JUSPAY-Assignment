import "./Activities.css";
import activitiesData from "./activitiesData";

function Activities() {
  return (
    <div className="activities-container">
   
      <div className="title-section">
        <h2 className="secondary-heading">Activities</h2>
      </div>


      <div className="activities-card-section">
        {activitiesData.map((activity) => (
          <div key={activity.id} className="activities-card">
            <div className="activities-profile">
              <img className="activities-profile-img" src={activity.profile} alt="profile" />
            </div>
            <div className="activities-text">
              <h2 className="right-side-subtitle">{activity.title}</h2>
              <h2 className="right-side-description">{activity.description}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activities;
