import React, { useState } from "react";
import Header from "../components/Header";
import PaymentMethodForm from "../components/PaymentMethodForm";
import BillingAddressForm from "../components/BillingAddressForm";
import BillingHistoryTable from "../components/BillingHistoryTable";

import "../scss/Billing.scss";
import { Redirect } from "react-router-dom";

function Billing() {
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [submitted, setSubmitted] = useState(false);

  const handleMembershipChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOnSubmit = (e) => {
    setSubmitted(true);
  };
  return (
    <div className="billing-container">
      {submitted === true ? <Redirect to="/success" /> : null}
      <Header name="Billing" />
      <div className=" billing-forms-container">
        <div className="billing-payment-form">
          <form onSubmit={handleOnSubmit}>
            <div class="select-membership-type">
              <h5>Membership Type</h5>
              <div>
                <input
                  type="radio"
                  name="annual"
                  id="annual"
                  value="annual"
                  checked={selectedOption === "annual"}
                  onChange={handleMembershipChange}
                />
                <input
                  type="radio"
                  name="monthly"
                  id="monthly"
                  value="monthly"
                  checked={selectedOption === "monthly"}
                  onChange={handleMembershipChange}
                />
                <label for="annual">Annual</label>
                <label for="monthly">Monthly</label>
              </div>
            </div>

            <h5>Payment Method</h5>
            <PaymentMethodForm />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="billing-address-form">
          <form onSubmit={handleOnSubmit}>
            <h5>Billing Address</h5>
            <BillingAddressForm />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="billing-history-table">
        <BillingHistoryTable />
      </div>
    </div>
  );
}

export default Billing;
