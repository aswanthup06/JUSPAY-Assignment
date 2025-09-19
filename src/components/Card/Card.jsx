import "./Card.css";

function Card({ title, value, change }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="value">{value}</p>
      <span className={`change ${change.includes("-") ? "down" : "up"}`}>
        {change}
      </span>
    </div>
  );
}

export default Card;
