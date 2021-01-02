import React from "react";

const Table = ({ columns, data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th class="invisible"></th>
          <th>Email </th>
          <th> Slack</th>
          <th>Twilio</th>
          <th> SNS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="leftHeader">Security</td>
          <td>Normal Cell</td>
          <td>Normal Cell</td>
          <td>Normal Cell</td>
          <td>Normal Cell</td>
        </tr>
        <tr>
          <td class="leftHeader">Compliance</td>
          <td>Normal Cell</td>
          <td>Normal Cell</td>
          <td>Normal Cell</td>
          <td>Normal Cell</td>
        </tr>
        <tr>
          <td class="leftHeader">Cost Savings</td>
          <td>Normal Cell</td>
          <td>Normal Cell</td>
          <td>Normal Cell</td>
          <td>Normal Cell</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
