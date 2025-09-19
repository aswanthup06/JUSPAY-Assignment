import "./Location.css";
import mapImg from "../../../../assets/images/Map.png";

function Location() {
  return (
    <div>
      <div>
        <h2 className="secondary-heading"> Revenue by Location</h2>{" "}
      </div>

      <div className="map">
        <img className="map-img" src={mapImg} alt="Map" />
      </div>

      <div></div>
    </div>
  );
}

export default Location;
