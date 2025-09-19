import "./Card.css";

function Card({ title, value, change }) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <div className="card-data">
        <h2 className="value">{value}</h2>
        <span className={`change ${change.includes("-") ? "down" : "up"}`}>
          {change}
        </span>
      </div>
    </div>
  );
}

export default Card;
