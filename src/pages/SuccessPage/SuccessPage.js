import React, { useState } from "react";
import "./SuccessPage.scss";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const SuccessPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleOnSubmit = (e) => {
    setSubmitted(true);
  };

  return (
    <div className="success-page-container">
      {submitted === true ? <Redirect to="/" /> : null}
      <form onSubmit={handleOnSubmit}>
        <div className="inner-container">
          <i>
            <FontAwesomeIcon icon={faCheckCircle} />
          </i>
          <div className="successful">Success!</div>
          <p>Your update was successful</p>
          <button type="submit">Go to Dashboard</button>
        </div>
      </form>
    </div>
  );
};

export default SuccessPage;
