import React from "react";
import "../scss/NotificationTable.scss";
import CheckBox from "./CheckBox";

const NotificationTable = () => {
  return (
    <div className="notification-table-container">
      <table className="table">
        <thead>
          <tr>
            <th className="invisible"></th>
            <th>Security </th>
            <th> Compliance</th>
            <th>Cost Savings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="leftHeader">
              Email
              <img src="email.png" alt="userImage" />
            </td>
            <td>
              <CheckBox />
            </td>
            <td>
              <CheckBox />
            </td>
            <td>
              <CheckBox />
            </td>
          </tr>
          <tr>
            <td className="leftHeader">
              Slack <img src="slack.png" alt="userImage" />
            </td>
            <td>
              <CheckBox />
            </td>
            <td>
              <CheckBox />
            </td>
            <td>
              <CheckBox />
            </td>
          </tr>
          <tr>
            <td className="leftHeader">
              Twilio <img src="twilio.png" alt="userImage" />
            </td>
            <td>
              <CheckBox />
            </td>
            <td>
              <CheckBox />
            </td>
            <td>
              <CheckBox />
            </td>
          </tr>
          <tr>
            <td className="leftHeader">
              Facebook <img src="facebook.png" alt="userImage" />
            </td>
            <td>
              <CheckBox />
            </td>
            <td>
              <CheckBox />
            </td>
            <td>
              <CheckBox />
            </td>
          </tr>
          <tr>
            <td className="leftHeader">
              Instagram <img src="instagram.png" alt="userImage" />
            </td>
            <td>
              <CheckBox />
            </td>
            <td>
              <CheckBox />
            </td>
            <td>
              <CheckBox />
            </td>
          </tr>
          <tr>
            <td className="leftHeader">
              Twitter <img src="twitter.png" alt="userImage" />
            </td>
            <td>
              <CheckBox />
            </td>
            <td>
              <CheckBox />
            </td>
            <td>
              <CheckBox />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NotificationTable;
