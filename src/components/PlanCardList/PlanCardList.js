import React from "react";
import "./PlanCardList.scss";
import PlanCard from "../PlanCard/PlanCard";

function PlanCardList({
  planDetails,
  selectedOption,
  selectedPlan,
  setSelectedPlan,
  handlePlanChange,
}) {
  return (
    <>
      <div className="plan-list-grid">
        {planDetails.map((plan) => {
          return (
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
          );
        })}
      </div>
    </>
  );
}

export default PlanCardList;
