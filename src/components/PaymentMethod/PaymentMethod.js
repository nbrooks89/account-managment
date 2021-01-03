import React, { useState } from "react";
import "./PaymentMethod.css";

function PaymentMethod() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="payment-method-container">
      <form>
        <div className="radio-container">
          <div className="radio">
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            <label>
              <img src="mastercard.png" alt="mastercard" />
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              <img src="paypal.png" alt="pay pal" />
            </label>
          </div>
          <div className="radio" value="option3">
            <label>
              <input
                type="radio"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              <img src="visa.png" alt="visa card" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentMethod;
