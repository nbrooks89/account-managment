import React, { useState } from "react";
import "../scss/Plans.scss";
import Header from "../components/Header";
import PlanCardList from "../components/PlanCardList";
import BillingAddressForm from "../components/BillingAddressForm";
import PaymentMethodForm from "../components/PaymentMethodForm";
import { Redirect } from "react-router-dom";

const planDetails = [
  {
    id: "lite",
    type: "Lite",
    costMonthly: "90",
    costAnnually: "1080",
    detail1: "Scan Upto 250 Cloud Resources",
    detail2: "Security Posture & Cost Optimization",
    detail3: "Purchase from Addons",
    detail4: "Security Violation Report",
    detail5: "Automated Checks Run Every 2 Days",
    detail6: "Support Response Within 3 days",
  },
  {
    id: "basic",
    type: "Basic",
    costMonthly: "180",
    costAnnually: "2160",
    detail1: "Scan Upto 500 Cloud Resources",
    detail2: "Security Posture & Cost Optimization",
    detail3: "CIS Level 1 & 2 Included",
    detail4: "Violation and Evidence Reports",
    detail5: "Automated Checks Run Everyday ",
    detail6: "Support Response Within 1 day",
  },
  {
    id: "pro",
    type: "Pro",
    costMonthly: "300",
    costAnnually: "3600",
    detail1: "Scan Upto 1000 Cloud Resources",
    detail2: "Security Posture & Cost Optimization",
    detail3: "CIS Level 1 & 2 Included",
    detail4: "Violation and Evidence Reports",
    detail5: "Automated Checks Run Every 12 Hours",
    detail6: "Dedicated Account Manager",
  },
  {
    type: "Add Ons",

    detail1: "CIS Level 1 & 2: $100 per account per month",
    detail2: "HIPAA: $100 per account per month",
    detail3: "SOC 2: $500 per account per month",
    detail4: "Webapp Penetration Testing: $250 per account    ",
    detail5: "Automated Checks Run Every 2 Days",
    detail6: "Support Response Within 3 days",
  },
];
function Plans() {
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [submitted, setSubmitted] = useState(false);

  const handleMembershipChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const handleOnSubmit = (e) => {
    setSubmitted(true);
  };

  return (
    <div className="plans-container">
      {submitted === true ? <Redirect to="/success" /> : null}
      <Header name="Plans" />
      <div className="plans-main-content">
        <form onSubmit={handleOnSubmit}>
          <div class="select-membership">
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

          <PlanCardList
            planDetails={planDetails}
            selectedOption={selectedOption}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            handlePlanChange={handlePlanChange}
          />
          <div className="plans-billing-outer-container">
            <div className="plans-payment-form">
              <h5>Payment Method</h5>
              <div className="payment-on-file-checkbox">
                <input
                  type="checkbox"
                  id="card-on-file"
                  name="card-on-file"
                  value="card-on-file"
                />
                <label for="card-on-file"> Use card on file</label>
              </div>
              <PaymentMethodForm />
            </div>

            <div className="plans-address-form">
              <h5>Billing Address</h5>
              <BillingAddressForm />
            </div>
          </div>
          <div className="button-layout">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Plans;
