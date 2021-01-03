import React from "react";
import "./PlanCard.css";

function PlanCard({
  id,
  type,
  costMonthly,
  costAnually,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5,
  detail6,
}) {
  return (
    <div className="plan-card-container">
      <div className="plan-type">{type}</div>
      <div className="plan-cost">
        <span className="dollar-sign">$</span>
        <span className="dollar-amount">{costMonthly}</span>
        <span className="per-mo">/mo</span>
      </div>
      <div className="plan-detail">{detail1}</div>
      <div className="plan-detail">{detail2}</div>
      <div className="plan-detail">{detail3}</div>
      <div className="plan-detail">{detail4}</div>
      <div className="plan-detail">{detail5}</div>
      <div className="plan-detail">{detail6}</div>
    </div>
  );
}

export default PlanCard;
