import React from "react";
import PaymentMethod from "../../components/PaymentMethod/PaymentMethod";
import "./Billing.css";

function Billing() {
  return (
    <div className="billing-container">
      <header>
        <h2>Billing Settings</h2>
      </header>
      <section>
        <PaymentMethod />
      </section>
    </div>
  );
}

export default Billing;
