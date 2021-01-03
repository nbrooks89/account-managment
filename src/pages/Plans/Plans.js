import React from "react";
import "./Plans.css";
import PlanCard from "../../components/PlanCard/PlanCard";

const planDetails = [
  {
    id: 1,
    type: "Lite",
    costMonthly: "90",
    costAnually: "1080",
    detail1: "Scan Upto 250 Cloud Resources",
    detail2: "Security Posture & Cost Optimization",
    detail3: "Purchase from Addons",
    detail4: "Security Violation Report",
    detail5: "Automated Checks Run Every 2 Days",
    detail6: "Support Response Within 3 days",
  },
  {
    id: 2,
    type: "Basic",
    costMonthly: "180",
    costAnually: "2160",
    detail1: "Scan Upto 500 Cloud Resources",
    detail2: "Security Posture & Cost Optimization",
    detail3: "CIS Level 1 & 2 Included",
    detail4: "Violation and Evidence Reports",
    detail5: "Automated Checks Run Everyday ",
    detail6: "Support Response Within 1 day",
  },
  {
    id: 3,
    type: "Pro",
    costMonthly: "300",
    costAnually: "3600",
    detail1: "Scan Upto 1000 Cloud Resources",
    detail2: "Security Posture & Cost Optimization",
    detail3: "CIS Level 1 & 2 Included",
    detail4: "Violation and Evidence Reports",
    detail5: "Automated Checks Run Every 12 Hours",
    detail6: "Dedicated Account Manager",
  },
];
function Plans() {
  const planCard = planDetails.map((plan) => {
    return (
      <div>
        <PlanCard
          id={plan.id}
          type={plan.type}
          costMonthly={plan.costMonthly}
          costAnually={plan.costAnually}
          detail1={plan.detail1}
          detail2={plan.detail2}
          detail3={plan.detail3}
          detail4={plan.detail4}
          detail5={plan.detail5}
          detail6={plan.detail6}
        />
      </div>
    );
  });
  return (
    <div className="plans-container">
      <header>
        <h2>Plans Settings</h2>
      </header>
      <div className="cards-container">{planCard}</div>
    </div>
  );
}

export default Plans;
