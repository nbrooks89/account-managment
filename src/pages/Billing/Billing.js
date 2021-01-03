import React from "react";
import PaymentMethodForm from "../../components/PaymentMethodForm/PaymentMethodForm";
import BillingAddressForm from "../../components/BillingAddressForm/BillingAddressForm";
import "./Billing.css";

function Billing() {
  return (
    <div className="billing-container">
      <header>
        <h2>Billing Settings</h2>
      </header>
      <div className="d-flex flex-row forms-container">
        <div className="form">
          <h5>Payment Method</h5>
          <PaymentMethodForm />
        </div>
        <div className="form">
          <h5>Billing Address</h5>
          <BillingAddressForm />
        </div>
      </div>
    </div>
  );
}

export default Billing;
