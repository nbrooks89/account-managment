import React, { useReducer, useState } from "react";
import "./UserProfile.scss";
import { Media, Image, Form } from "react-bootstrap";
import { Redirect } from "react-router-dom";

function UserProfile() {
  const [submitted, setSubmitted] = useState(false);
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setUserInput({ [name]: value });
  };

  const handleOnSubmit = (e) => {
    setSubmitted(true);
  };

  return (
    <div className="user-profile-container">
      {submitted === true ? <Redirect to="/success" /> : null}
      <header>
        <p>ACCOUNT SETTINGS/</p>
        <h1>Profile </h1>
      </header>
      <main>
        <Media className="d-flex flex-column align-items-center">
          <Image
            src="archie.jpg"
            alt="user name"
            width={150}
            height={150}
            roundedCircle
            // fluid
          ></Image>
          <Media.Body>
            <Form.Group controlId="input">
              <Form.Label
                className="change-picture-label"
                for="input"
                id="label"
              >
                Change Picture
              </Form.Label>
              <Form.File type="file" name="photo" />
            </Form.Group>
          </Media.Body>
        </Media>

        <form onSubmit={handleOnSubmit}>
          <div className="field">
            <label>NAME</label>
            <input
              type="text"
              name="name"
              value={userInput.name}
              placeholder="Archie Brooks"
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>EMAIL</label>
            <input
              type="text"
              name="email"
              value={userInput.email}
              onChange={handleInputChange}
              placeholder="archie@example.com"
            />
          </div>
          <div className="field">
            <label>PHONE NUMBER</label>
            <input
              type="text"
              name="phoneNumber"
              value={userInput.phoneNumber}
              onChange={handleInputChange}
              placeholder="111-111-1111"
            />
          </div>
          <div className="field">
            <label>PASSWORD</label>
            <input
              type="password"
              name="password"
              value={userInput.password}
              placeholder="********"
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>CONFIRM PASSWORD</label>
            <input
              name="confirmPassword"
              value={userInput.confirmPassword}
              onChange={handleInputChange}
              placeholder="********"
            />
          </div>

          <button type="submit">Save</button>
        </form>
      </main>
    </div>
  );
}

export default UserProfile;
