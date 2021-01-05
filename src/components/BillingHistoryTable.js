import React from "react";
import "../scss/BillingHistoryTable.scss";

const BillingHistoryTable = () => {
  return (
    <div className="billing-history-container">
      <h5>Billing History</h5>
      <table className="table">
        <thead>
          <tr>
            <th>Date </th>
            <th> Invoice</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23 Feb 2019</td>
            <td>AT-1234</td>
            <td>$20:20</td>
          </tr>
          <tr>
            <td>23 Feb 2019</td>
            <td>AT-1234</td>
            <td>$20:20</td>
          </tr>
          <tr>
            <td>23 Feb 2019</td>
            <td>AT-1234</td>
            <td>$20:20</td>
          </tr>
          <tr>
            <td>23 Feb 2019</td>
            <td>AT-1234</td>
            <td>$20:20</td>
          </tr>
          <tr>
            <td>23 Feb 2019</td>
            <td>AT-1234</td>
            <td>$20:20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillingHistoryTable;
