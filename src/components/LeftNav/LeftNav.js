import "./LeftNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faFileInvoiceDollar,
  faUser,
  faBell,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function LeftNav() {
  return (
    <div className="nav-container">
      <div className="user-pic-container">
        <img src="archie.jpg" alt="userImage" />
        <p>Archie Brooks</p>
      </div>
      <h5> ACCOUNT SETTINGS</h5>
      <div className="nav-links-container">
        <NavLink exact to="/" className="nav-item" activeClassName="active">
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
          <p>Profile</p>
        </NavLink>
        <NavLink
          to="/notifications"
          className="nav-item"
          activeClassName="active"
        >
          <i>
            <FontAwesomeIcon icon={faBell} />
          </i>
          <p> Notifications </p>
        </NavLink>
        <NavLink to="/billing" className="nav-item" activeClassName="active">
          <i>
            <FontAwesomeIcon
              icon={faFileInvoiceDollar}
              activeClassName="active"
            ></FontAwesomeIcon>
          </i>
          <p> Billing </p>
        </NavLink>
        <NavLink to="/plans" className="nav-item" activeClassName="active">
          <i>
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
          </i>
          <p> Plans </p>
        </NavLink>
      </div>
    </div>
  );
}

export default LeftNav;
