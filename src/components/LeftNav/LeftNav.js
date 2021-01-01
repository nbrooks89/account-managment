import "./LeftNav.css";
import { Link } from "react-router-dom";

function LeftNav() {
  return (
    <div className="nav-container">
      <Link to="/" className="item">
        Profile
      </Link>
      <Link to="/notifications" className="item">
        Notifications
      </Link>
      <Link to="/billing" className="item">
        Billing
      </Link>
      <Link to="/plans" className="item">
        Plans
      </Link>
    </div>
  );
}

export default LeftNav;
