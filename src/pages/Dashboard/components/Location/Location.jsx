import React from "react";
import "./Location.css";

// Assuming you have the map image in the specified location
import mapImg from "../../../../assets/images/Map.png";

function Location() {
  // Data for revenue by location
  const locations = [
    { name: "New York", revenue: "72K", percentage: 72 },
    { name: "San Francisco", revenue: "39K", percentage: 39 },
    { name: "Sydney", revenue: "25K", percentage: 25 },
    { name: "Singapore", revenue: "61K", percentage: 61 },
  ];

  return (
    <div className="location-container">


      <div className="location-header">
        <h2 className="secondary-heading">Revenue by Location</h2>
      </div>

      <div className="map-container">
        <img className="map-img" src={mapImg} alt="World map showing revenue locations" />
      </div>

      <div className="revenue-list">
        {locations.map((location, index) => (
          <div key={index} className="revenue-item">
            <div className="location-info">
              <h3 className="titles-two">{location.name}</h3>
              <span className="titles-two">{location.revenue}</span>
            </div>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${location.percentage}%` }}
                aria-label={`${location.percentage}% revenue`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Location;