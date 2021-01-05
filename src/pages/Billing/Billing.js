import React, { useState } from "react";
import PaymentMethodForm from "../../components/PaymentMethodForm/PaymentMethodForm";
import BillingAddressForm from "../../components/BillingAddressForm/BillingAddressForm";
import BillingHistoryTable from "../../components/BillingHistoryTable/BillingHistoryTable";
import "./Billing.scss";
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
      <header>
        <p>ACCOUNT SETTINGS/</p>
        <h1>Billing </h1>
      </header>
      <div className="d-flex flex-row forms-container">
        <div className="form-container-payment">
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
        <div className="form-container-address">
          <form onSubmit={handleOnSubmit}>
            <h5>Billing Address</h5>
            <BillingAddressForm />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <BillingHistoryTable />
    </div>
  );
}

export default Billing;
