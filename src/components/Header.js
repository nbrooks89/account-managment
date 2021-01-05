import React from "react";
import "../scss/Header.scss";

const Header = ({ name }) => {
  return (
    <div className="header-container">
      <h6>ACCOUNT SETTINGS/</h6>
      <h1>{name} </h1>
    </div>
  );
};

export default Header;
