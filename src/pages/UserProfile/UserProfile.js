import React, { useReducer } from "react";
import "./UserProfile.css";
import { Media, Image, Form } from "react-bootstrap";

function UserProfile() {
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

  return (
    <div className="user-profile-container">
      <header>
        <h2>User Profile</h2>
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

        <form>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={userInput.name}
              placeholder="Archie Brooks"
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={userInput.email}
              onChange={handleInputChange}
              placeholder="archie@example.com"
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={userInput.phoneNumber}
              onChange={handleInputChange}
              placeholder="111-111-1111"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={userInput.password}
              placeholder="********"
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              value={userInput.confirmPassword}
              onChange={handleInputChange}
              placeholder="********"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default UserProfile;
