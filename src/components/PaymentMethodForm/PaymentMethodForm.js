import React, { useState, useReducer } from "react";
import "./PaymentMethodForm.scss";

function PaymentMethodForm() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      nameOnCard: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    }
  );

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setUserInput({ [name]: value });
  };

  return (
    <div className="payment-method-container">
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

      <div className=" d-flex flex-column card-info-field">
        <label>Name on Card</label>
        <input
          type="text"
          name="name"
          value={userInput.name}
          placeholder="Archie Brooks"
          onChange={handleInputChange}
        />
      </div>
      <div className="d-flex flex-column card-info-field">
        <label>Credit Card Number</label>
        <input
          type="text"
          name="name"
          value={userInput.name}
          placeholder="1111-1111-1111-1111"
          onChange={handleInputChange}
        />
      </div>
      <div className="d-flex flex-row ">
        <div className=" d-flex flex-column card-info-field">
          <label>Expiration Date</label>
          <input
            type="text"
            name="name"
            value={userInput.name}
            placeholder="02/23"
            onChange={handleInputChange}
          />
        </div>
        <div className=" d-flex flex-column card-info-field">
          <label>CVV</label>
          <input
            type="text"
            name="name"
            value={userInput.name}
            placeholder="123"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodForm;
