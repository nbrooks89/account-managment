import React from "react";
import "./Table.scss";
import CheckBox from "../CheckBox/CheckBox";

const Table = () => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th className="invisible"></th>
            <th>Email </th>
            <th> Slack</th>
            <th>Twilio</th>
            <th> SNS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="leftHeader">Security</td>
            <td>
              <CheckBox />
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
            <td className="leftHeader">Compliance</td>
            <td>
              <CheckBox />
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
            <td className="leftHeader">Cost Savings</td>
            <td>
              <CheckBox />
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

export default Table;
