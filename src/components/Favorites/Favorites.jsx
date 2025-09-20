import "./Favorites.css";
import SvgDot from "./IconComps/Dot";
function Favorites() {
  return (
    <div className="favorites">
      <div className="fav-title">
        <h2 className="fav-title-text">Favorites</h2>
        <h2 className="fav-title-text">Recently</h2>
      </div>

      <div className="fev-menu">
        <button>
          <SvgDot />
          <h2 className="titles"> Overview</h2>
        </button>
        <button>
          <SvgDot />
          <h2 className="titles"> Projects</h2>
        </button>
      </div>
    </div>
  );
}

export default Favorites;
