import React, { useReducer } from "react";
import "./BillingAddressForm.scss";

function BillingAddressForm() {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      fullName: "",
      Address1: "",
      Address2: "",
      city: "",
      state: "",
      zipcode: "",
    }
  );

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setUserInput({ [name]: value });
  };

  return (
    <div className="billing-address-container">
      <div className=" d-flex flex-column billing-address-field">
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={userInput.fullName}
          placeholder="Archie Brooks"
          onChange={handleInputChange}
        />
      </div>
      <div className="d-flex flex-column billing-address-field">
        <label>Address 1</label>
        <input
          type="text"
          name="name"
          value={userInput.address1}
          placeholder="124 Woof Street"
          onChange={handleInputChange}
        />
      </div>

      <div className=" d-flex flex-column billing-address-field">
        <label>City</label>
        <input
          type="text"
          name="name"
          value={userInput.city}
          placeholder="Boston"
          onChange={handleInputChange}
        />
      </div>
      <div className="d-flex flex-row ">
        <div className=" d-flex flex-column billing-address-field">
          <label>State</label>
          <input
            type="text"
            name="name"
            value={userInput.state}
            placeholder="MA"
            onChange={handleInputChange}
          />
        </div>
        <div className=" d-flex flex-column billing-address-field">
          <label>Zip Code</label>
          <input
            type="text"
            name="name"
            value={userInput.zipCode}
            placeholder="02144"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default BillingAddressForm;
