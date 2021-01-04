import React, { useState } from "react";
import "./Plans.css";
import PlanCard from "../../components/PlanCard/PlanCard";

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
];
function Plans() {
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("basic");
  console.log(selectedPlan);
  console.log(selectedOption);
  const handleMembershipChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  const planCard = planDetails.map((plan) => {
    return (
      <div>
        <PlanCard
          selectedOption={selectedOption}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          handlePlanChange={handlePlanChange}
          id={plan.id}
          type={plan.type}
          costMonthly={plan.costMonthly}
          costAnnually={plan.costAnnually}
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

      <div className="cards-container">{planCard}</div>
    </div>
  );
}

export default Plans;
