import React from "react";
import "./PlanCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function PlanCard({
  selectedOption,
  handlePlanChange,
  selectedPlan,
  id,
  type,
  costMonthly,
  costAnnually,
  detail1,
  detail2,
  detail3,
  detail4,
  detail5,
  detail6,
}) {
  console.log(costMonthly);
  return (
    <div className="plan-card-container">
      <div className="plan-type">{type}</div>
      <div className="plan-cost">
        {!costMonthly && !costAnnually ? (
          <div></div>
        ) : selectedOption === "monthly" ? (
          <div>
            <span className="dollar-sign">$</span>
            <span className="dollar-amount">{costMonthly}</span>
            <span className="per-mo">/mo</span>
          </div>
        ) : (
          <div>
            <span className="dollar-sign">$</span>
            <span className="dollar-amount">{costAnnually}</span>
            <span className="per-mo">/year</span>
          </div>
        )}
      </div>
      <div className="plan-detail">
        <i>
          <FontAwesomeIcon icon={faCheck} />
        </i>

        <div>{detail1}</div>
      </div>
      <div className="plan-detail">
        <i>
          <FontAwesomeIcon icon={faCheck} />
        </i>

        <div>{detail2}</div>
      </div>
      <div className="plan-detail">
        <i>
          <FontAwesomeIcon icon={faCheck} />
        </i>
        <div>{detail3}</div>
      </div>
      <div className="plan-detail">
        <i>
          <FontAwesomeIcon icon={faCheck} />
        </i>
        <div>{detail4}</div>
      </div>
      <div className="plan-detail">
        <i>
          <FontAwesomeIcon icon={faCheck} />
        </i>
        <div>{detail5}</div>
      </div>
      <div className="plan-detail">
        <i>
          <FontAwesomeIcon icon={faCheck} />
        </i>
        <div>{detail6}</div>
      </div>
      <div class="select-plan">
        <input
          type="radio"
          className={id}
          name={id}
          id={id}
          value={id}
          checked={selectedPlan === id}
          onChange={handlePlanChange}
        />
        {!costMonthly && !costAnnually ? null : selectedPlan === id ? (
          <label for={id}>Selected</label>
        ) : (
          <label for={id}>Select</label>
        )}
      </div>
    </div>
  );
}

export default PlanCard;
