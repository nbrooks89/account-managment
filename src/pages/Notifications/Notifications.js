import React, { useState } from "react";
import "./Notifications.scss";
import Table from "../../components/Table/Table";
import { Redirect } from "react-router-dom";

function Notifications() {
  const [submitted, setSubmitted] = useState(false);

  const handleOnSubmit = (e) => {
    setSubmitted(true);
  };

  return (
    <div className="notifications-container">
      <form onSubmit={handleOnSubmit}>
        {submitted === true ? <Redirect to="/success" /> : null}
        <header>
          <p>ACCOUNT SETTINGS/</p>
          <h1>Notifications </h1>
        </header>
        <div className="table-container">
          <Table />

          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default Notifications;
