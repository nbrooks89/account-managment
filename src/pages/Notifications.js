import React, { useState } from "react";
import "../scss/Notifications.scss";
import Header from "../components/Header";
import NotificationTable from "../components/NotificationTable";
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
        <Header name="Notifications" />
        <div className="table-container">
          <NotificationTable />

          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default Notifications;
