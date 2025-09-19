import "./Contacts.css";
import contactsData from "./contactsData";

function Contacts() {
  return (
    <div>
      <div className="title-section">
        <h2 className="secondary-heading">Contacts</h2>
      </div>

      <div className="contacts-section">
        {contactsData.map((contacts) => (
          <div key={contacts.id} className="contacts-card">
            <div className="contacts-profile">
              <img className="contacts-profile-img" src={contacts.profile} alt="profile" />
            </div>
            <div>
              <h2 className="right-side-subtitle">
                 {contacts.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;
